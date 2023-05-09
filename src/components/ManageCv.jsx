import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { TextField } from '@mui/material';
import { manageCvStyles } from '../mainTheme/localStyles.js';
import { Menu } from '@mui/icons-material';
import { PdfResume } from '../components/PdfLayout/PdfMarkup';
import SaveIcon from '@mui/icons-material/Save';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import RestoreIcon from '@mui/icons-material/Restore';
import CancelIcon from '@mui/icons-material/Cancel';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const ManageCv = ({ state, helper, preview }) => {
  const [prevName, setPrevName] = useState(state.currentCv.cvName);

  const [save, setSave] = useState(false);

  const isUnique = () => {
    return state.cvBase.every(
      (cv) => cv.cvName !== state.currentCv.cvName,
    );
  }

  const handlers = () => {
    return {
      new() {
        helper.setState('currentCv', state.titles.template);
      },

      change(e, field) {
        helper.setState(field, e.target.value);
      },

      cancelBtn: () => {
        setSave(false);

        helper.setState('cvName', prevName);
      },

      save: (boolean) => {
        const currentCv = { ...state.currentCv };

        const cvBase = [...state.cvBase];

        const { cvName } = currentCv;

        const { prevName } = state;

        const checkIfEmpty = () => {
          return Object.values(currentCv.about).every(value => {
            if (typeof value === 'boolean') {
              return true;
            }
            return value === '';
          });
        };

        if (helper.checkEditable()) return alert('One or more sections in edit mode, please check and save data.')

        if (checkIfEmpty()) return alert('Section About can\'t be empty');

        let updatedCvBase;

        setSave(true);

        const actions = [
          {// first open
            condition: () => boolean,

            action: () => {
              setPrevName(cvName);

              setSave(boolean);
            },
          },
          {// update existed
            condition: () => !isUnique() && prevName === cvName,

            action: () => {
              alert('Updated existed');

              updatedCvBase = cvBase.map((cv) => {
                if (cv.cvName === cvName) {
                  return currentCv;
                }

                return cv;
              });

              setSave(boolean);

              helper.setState('cvBase', updatedCvBase);
            },
          },
          {// name can not be empty
            condition: () => currentCv.cvName.length === 0 && cvName.length === 0,

            action: () => {
              alert('Name can\'t be empty');
            }
          },
          {// this name already exists
            condition: () => !isUnique() && cvName !== prevName,

            action: () => {
              alert('this name already exist');

              setSave(true);
            },
          },
          {// save as new
            condition: () => isUnique() && cvName.length > 0 && currentCv.cvName !== prevName,

            action: () => {
              alert('Saved as new');

              updatedCvBase = [...state.cvBase];

              updatedCvBase.push(currentCv);

              setSave(false);

              helper.setState('cvBase', updatedCvBase);
            },
          },
        ];

        const action = actions.find(({ condition }) => condition());

        if (action) {
          action.action();
        } else {
          console.warn('no action found');
        }
      },

      rename: () => {
        const { cvName } = { ...state.currentCv };

        const actions = [
          {// Can be renamed
            condition: () => isUnique() && prevName !== cvName,
            action: () => {
              const cvBase = [...state.cvBase];

              const index = cvBase.findIndex(
                (cv) => cv.cvName === prevName,
              );

              cvBase[index].cvName = cvName;

              setSave(false);

              helper.setState('cvBase', cvBase);
            },
          },
          {// can't be renamed, new name exists in the array.
            condition: () => !isUnique() && prevName !== cvName,
            action: () => {
              alert(
                'There is a resume with such name. Please, choose other name.',
              );

              return;
            },
          },
        ];

        const action = actions.find(({ condition }) => condition());

        if (action) {
          action.action();
        } else {
          setSave(true);
        }
      },

      cancel: () => {
        const cvBase = [...state.cvBase];

        const { cvName } = { ...state.currentCv };

        const template = { ...state.titles.template };

        const index = cvBase.findIndex((cv) => cv.cvName === cvName);

        if (index === -1) helper.setState('currentCv', template);
        else helper.setState('currentCv', cvBase[index]);
      },

      delete: () => {
        const cvBase = [...state.cvBase];

        const cvName = state.currentCv.cvName;

        const { template } = state.titles;

        const updatedCvBase = cvBase.filter((cv) => cv.cvName !== cvName);

        cvBase.length === updatedCvBase.length &&
          cvBase.every((element, index) => element === updatedCvBase[index]);

        helper.setState('cvBase', updatedCvBase, 'currentCv', template);
      },

      duplicate: () => {
        const currentCv = { ...state.currentCv };

        let cvBase = [...state.cvBase];

        let cvName = currentCv.cvName;

        const isUnique = (cvName) => !cvBase.some((cv) => cv.cvName === cvName);

        const makeDuplicate = (cvName) => {
          if (isUnique(cvName)) {
            currentCv.cvName = cvName;

            cvBase.push(currentCv);

            helper.setState(
              'cvName',
              currentCv.cvName,
              'cvBase',
              cvBase,
            );
          } else {
            makeDuplicate(`${cvName} _copy`);
          }
        };

        makeDuplicate(cvName);
      },
    };
  }

  const handle = handlers();

  const { ManageCvBox, IconButtonStyled, PDFDownloadLinkStyled } = manageCvStyles;

  return (
    <ManageCvBox>
      <IconButtonStyled
        title='Show Resume List'
        color='primary'
        onClick={() => preview().list()}>
        <Menu />
      </IconButtonStyled>

      <IconButtonStyled
        title='Show PDF preview'
        color='primary'
        onClick={() => preview().pdf()}
      >
        <PictureAsPdfIcon />
      </IconButtonStyled>

      <PDFDownloadLinkStyled
        document={<PdfResume state={state} />}
        title='Download PDF'
        fileName="resume.pdf"
        style={{ margin: 'auto 0' }}
      >
        <DownloadOutlinedIcon />
      </PDFDownloadLinkStyled>

      {save ? (
        <EditName state={state} handle={handle} />
      ) : (
        <IconButton
          title='Save or rename resume'
          color='primary'
          onClick={() => handle.save(true)}
        >
          <SaveIcon />
          {!state.secondary.new && <DriveFileRenameOutlineIcon />}
        </IconButton>
      )}
      {!save && (
        <>
          <IconButton
            title='Restore previous version or clear all if unsaved'
            color='primary'
            onClick={handle.cancel}
          >
            <RestoreIcon />
          </IconButton>
          {!state.secondary.new && (
            <>
              <IconButton
                title='Create new resume'
                color='primary'
                onClick={handle.new}
              >
                <NoteAddIcon />
              </IconButton>

              <IconButton
                title='Delete resume'
                color='primary'
                onClick={handle.delete}
              >
                <DeleteIcon />
              </IconButton>

              <IconButton
                title='Duplicate resume'
                color='primary'
                onClick={handle.duplicate}
              >
                <ControlPointDuplicateIcon />
              </IconButton>
            </>
          )}
        </>
      )}
    </ManageCvBox>
  );
}

const EditName = ({ handle, state }) => { 
    return (
      <div>
        <TextField
          color='primary'
          size='small'
          label='Enter The Name'
          type='text'
          value={state.currentCv.cvName}
          onChange={(e) => handle.change(e, 'cvName')}
        />

        <IconButton
          title='Save resume'
          color='primary'
          onClick={() => handle.save(false)}
        >
          <SaveIcon />
        </IconButton>

        {!state.secondary.new && (
          <IconButton
            title='Rename resume'
            color='primary'
            onClick={() => handle.rename()}
          >
            <DriveFileRenameOutlineIcon />
          </IconButton>
        )}

        <IconButton
          title='Cancel'
          color='primary'
          onClick={() => handle.cancel('save')}
        >
          <CancelIcon />
        </IconButton>
      </div>
    );
}

export default ManageCv;
