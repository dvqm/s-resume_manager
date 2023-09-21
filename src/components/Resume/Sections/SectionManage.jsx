import { FormGroup, Divider, IconButton, Typography } from "@mui/material";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { genericStyles } from "../../../mainTheme/localStyles";
import { createElement, useState } from 'react';

const SectionManage = ({ field, setFields, updateResume, viewer, editer, titles, id, initial }) => {
  const [original, setOriginal] = useState([]);
  const [init, setInit] = useState(true);
  const [isEdit, setIsEdit] = useState(initial);

  const actions = new Map([
    ['delete', () => {
      setFields(prevFields => prevFields.filter((_, index) => index !== id));
      setIsEdit(false);
    }],
    ['update', (field, value) => {
      setFields(prevFields => {
        prevFields[id][field] = value
        return [...prevFields,];
      });
    }],
    ['save', () => {
      setFields(prevFields => {
        prevFields[id] = field;
        return [...prevFields].sort((a, b) => a.startDate - b.startDate);
      });
      setIsEdit(false);
      setInit(false);
      updateResume();
    }],
    ['edit', () => {
      setOriginal(field);
      setIsEdit(true);
    }],
    ['cancel', () => {
      setFields(prevFields => {
        prevFields[id] = original;
        return [...prevFields];
      });
      setIsEdit(false);
    }]
  ]);

  const handleAction = (e, action, field) => {
    e.preventDefault();
    const act = actions.get(action);
    if (act) act(field, e.currentTarget.value);
  };

  return <>
    {
      isEdit ? (
        <SectionEdit
          init={init}
          editer={editer}
          titles={titles}
          view={field}
          field={field}
          setFields={setFields}
          handleAction={handleAction}
        />
      ) : (
        <SectionView
          viewer={viewer}
          field={field}
          titles={titles}
          handleAction={handleAction}
        />
      )}
  </>
};

const SectionEdit = ({ editer, titles, field, handleAction, init }) => {
  const { ManageBtnsWrapper } = genericStyles;

  return <form
    onSubmit={(e) => handleAction(e, 'save')}
  >
    <FormGroup>
      <ManageBtnsWrapper>
        <IconButton color='secondary' type='submit'>
          <CheckOutlinedIcon />
        </IconButton>
        {!init && (
          <IconButton
            color='secondary'
            onClick={(e) => handleAction(e, 'cancel')}
          >
            <CloseOutlinedIcon />
          </IconButton>
        )}
        <IconButton
          color='secondary'
          onClick={(e) => handleAction(e, 'delete')}
        >
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </ManageBtnsWrapper>

      {createElement(editer, {
        titles: titles,
        field: field,
        handleAction: handleAction,
      })}
    </FormGroup>
  </form>
}

const SectionView = ({ viewer, field, titles, handleAction }) => {
  const { ArticleStyled, StackRow } = genericStyles;
  return <ArticleStyled>
    <StackRow>
      <Typography variant='h3'>{field.title}</Typography>

      <IconButton
        color='secondary'
        size='medium'
        onClick={(e) => handleAction(e, 'edit')}
      >
        <EditIcon />
      </IconButton>
    </StackRow>

    {createElement(viewer, {
      titles: titles,
      field: field,
    })}
    <Divider light variant='inset' />
  </ArticleStyled>
}

export default SectionManage;
