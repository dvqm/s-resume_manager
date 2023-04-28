import React from 'react';
import { IconButton } from '@mui/material';
import { TextField } from '@mui/material';
import { manageCvStyles } from '../mainTheme/localStyles.js';
import SaveIcon from '@mui/icons-material/Save';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import RestoreIcon from '@mui/icons-material/Restore';
import CancelIcon from '@mui/icons-material/Cancel';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import { Menu } from '@mui/icons-material';

class ManageCv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevName: props.state.currentCv.cvName,
      save: false,
      warning: null,
    };

    this.helper = props.helper;

    this.handle = this.handlers(this);

    this.isUnique = this.isUnique.bind(this);
  }

  isUnique() {
    return this.props.state.cvBase.every(
      (cv) => cv.cvName !== this.props.state.currentCv.cvName,
    );
  }

  handlers(context) {
    return {
      new() {
        const newCv = { ...context.props.state.static.template };

        context.helper.setState('currentCv', newCv);
      },

      change(e, field) {
        context.props.helper.setState(field, e.target.value);
      },

      cancelBtn: (operation) => {
        this.setState(
          {
            ...this.state,
            [operation]: false,
          },
          () => this.helper.setState('cvName', this.state.prevName),
        );
      },

      save: (boolean) => {
        const currentCv = { ...context.props.state.currentCv };

        const cvBase = [...context.props.state.cvBase];

        const { cvName } = currentCv;

        const { prevName } = context.state;

        const checkIfEmpty = () => {
          return Object.values(currentCv.about).every(value => {
            if (typeof value === 'boolean') {
              return true;
            }
            return value === null;
          });
        };

        if (context.helper.checkEditable()) return alert('One or more sections in edit mode, please check and save data.')

        if (checkIfEmpty()) return alert('Section About can\'t be empty');

        let updatedCvBase;

        context.setState({
          ...context.state,
          save: true,
        });

        switch (true) {
          // first open
          case boolean:
            context.setState({
              ...context.state,
              prevName: cvName,
              save: boolean,
            });

            break;

          // update existed
          case !context.isUnique() && prevName === cvName:


            alert('Updated existed');

            updatedCvBase = cvBase.map((cv) => {
              if (cv.cvName === cvName) {
                return currentCv;
              }

              return cv;
            });

            context.setState({
              ...context.state,
              save: boolean,
            });

            context.props.helper.setState('cvBase', updatedCvBase);
            break;

          //name can not be empty
          case currentCv.cvName.length === 0 && cvName.length === 0:
            alert('Name can\'t be empty');

            break;

          //this name already exists
          case !context.isUnique() && cvName !== prevName:
            alert('this name already exist');

            context.setState({
              ...context.state,
              save: true,
            });

            break;

          //save as new
          case context.isUnique() &&
            cvName.length > 0 &&
            currentCv.cvName !== prevName:


            alert('Saved as new');

            updatedCvBase = [...context.props.state.cvBase];

            updatedCvBase.push(currentCv);

            context.setState(
              {
                ...context.state,
                save: false,
              },
              () => {
                context.props.helper.setState('cvBase', updatedCvBase);
              },
            );

            break;

          // something went wrong
          default:
            console.warn('Ooops');

            break;
        }
      },

      rename: () => {
        const { cvName } = { ...this.props.state.currentCv };

        switch (true) {
          // Can be renamed
          case context.isUnique() && context.state.prevName !== cvName:
            const cvBase = [...context.props.state.cvBase];

            const index = cvBase.findIndex(
              (cv) => cv.cvName === context.state.prevName,
            );

            cvBase[index].cvName = cvName;

            context.setState({ ...context.state, save: false });

            context.helper.setState('cvBase', cvBase);

            break;

          // can't be renamed, new name exists in the array.
          case !context.isUnique() && context.state.prevName !== cvName:
            alert(
              'There is a resume with such name. Please, choose other name.',
            );

            break;

          // If nothing to change (default) context.state.prevName === cvName :
          default:
            context.setState({ ...context.state, save: true });

            break;
        }
      },

      cancel: () => {
        const cvBase = [...context.props.state.cvBase];

        const { cvName } = { ...context.props.state.currentCv };

        const template = { ...context.props.state.static.template };

        const index = cvBase.findIndex((cv) => cv.cvName === cvName);

        if (index === -1) context.props.helper.setState('currentCv', template);
        else context.props.helper.setState('currentCv', cvBase[index]);
      },

      delete: () => {
        const cvBase = [...context.props.state.cvBase];

        const cvName = context.props.state.currentCv.cvName;

        const { template } = context.props.state.static;

        const updatedCvBase = cvBase.filter((cv) => cv.cvName !== cvName);

        cvBase.length === updatedCvBase.length &&
          cvBase.every((element, index) => element === updatedCvBase[index]);

        context.helper.setState('cvBase', updatedCvBase, 'currentCv', template);
      },

      duplicate: () => {
        const currentCv = { ...context.props.state.currentCv };

        let cvBase = [...context.props.state.cvBase];

        let cvName = currentCv.cvName;

        const isUnique = (cvName) => !cvBase.some((cv) => cv.cvName === cvName);

        const makeDuplicate = (cvName) => {
          if (isUnique(cvName)) {
            currentCv.cvName = cvName;

            cvBase.push(currentCv);

            context.helper.setState(
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

  render() {
    const { ManageCvBox, IconButtonStyled } = manageCvStyles;
    return (
      <ManageCvBox>
        <IconButtonStyled
          title='Show Resume List'
          color='primary'
          onClick={() => this.props.preview().list()}>
          <Menu />
        </IconButtonStyled>

        <IconButtonStyled
          title='Show PDF preview'
          color='primary'
          onClick={() => this.props.preview().pdf()}
        >
          <PictureAsPdfIcon />
        </IconButtonStyled>

        {this.state.save ? (
          <EditName state={this.props.state} handle={this.handle} />
        ) : (
            <IconButton
              title='Save or rename resume'
              color='primary'
              onClick={() => this.handle.save(true)}
            >
              <SaveIcon />
              {!this.props.state.secondary.new && <DriveFileRenameOutlineIcon />}
            </IconButton>
          )}
        {!this.state.save && (
          <>
            <IconButton
              title='Restore previous version or clear all if unsaved'
              color='primary'
              onClick={this.handle.cancel}
            >
              <RestoreIcon />
            </IconButton>
            {!this.props.state.secondary.new && (
              <>
                <IconButton
                  title='Create new resume'
                  color='primary'
                  onClick={this.handle.new}
                >
                  <NoteAddIcon />
                </IconButton>

                <IconButton
                  title='Delete resume'
                  color='primary'
                  onClick={this.handle.delete}
                >
                  <DeleteIcon />
                </IconButton>

                <IconButton
                  title='Duplicate resume'
                  color='primary'
                  onClick={this.handle.duplicate}
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
}

class EditName extends React.Component {
  change(e, field) {
    this.props.handle.change(e, field);
  }

  save(boolean) {
    this.props.handle.save(boolean);
  }

  rename() {
    this.props.handle.rename();
  }

  cancel(operation) {
    this.props.handle.cancelBtn(operation);
  }

  render() {
    return (
      <div>
        <TextField
          color='primary'
          size='small'
          label='Enter The Name'
          type='text'
          value={this.props.state.currentCv.cvName}
          onChange={(e) => this.change(e, 'cvName')}
        />

        <IconButton
          title='Save resume'
          color='primary'
          onClick={() => this.save(false)}
        >
          <SaveIcon />
        </IconButton>

        {!this.props.state.secondary.new && (
          <IconButton
            title='Rename resume'
            color='primary'
            onClick={() => this.rename()}
          >
            <DriveFileRenameOutlineIcon />
          </IconButton>
        )}

        <IconButton
          title='Cancel'
          color='primary'
          onClick={() => this.cancel('save')}
        >
          <CancelIcon />
        </IconButton>
      </div>
    );
  }
}

export default ManageCv;
