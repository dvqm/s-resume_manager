import React from 'react';
import { FormGroup, Divider, IconButton } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { genericStyles } from './../../../mainTheme/localStyles';

const ArticleForm = ({ titles, handle, editer, rubric, fields, setFields }) => {
  const { ManageBtnsWrapper } = genericStyles;
  return <form onSubmit={(e) => handle.save(e)}>
    <h2>{titles.header}</h2>

    <Divider sx={{ borderBottom: '1px solid', mb: 5 }} />

    <FormGroup>
      <ManageBtnsWrapper>
        <IconButton color='secondary' type='submit'>
          <CheckOutlinedIcon />
        </IconButton>

        <IconButton
          color='secondary'
          onClick={(e) => handle.cancel(e)}
        >
          <CloseOutlinedIcon />
        </IconButton>

        <IconButton
          color='secondary'
          onClick={(e) => handle.clear(e)}
        >
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </ManageBtnsWrapper>
      {React.createElement(editer, {
        component: rubric,
        titles: titles,
        fields: fields,
        setFields: setFields,
      })}
    </FormGroup>
  </form>
}

export default ArticleForm;
