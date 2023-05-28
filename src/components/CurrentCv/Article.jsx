import React, { useState } from 'react';
import { FormGroup, IconButton, Divider, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { genericStyles } from './../../mainTheme/localStyles';

const { StackRow, ManageBtnsWrapper } = genericStyles;

const Article = ({ edit, view, component, helper, values, titles }) => { 
  const { editing } = values;

  const [original, setOriginal] = useState(values);


  const handlers = () => {
    const dynamicFieldsEdit = (bool) => {
      const dynamic = { ...values };
      dynamic.editing = bool;
      return dynamic;
    }

    return {
      edit() {
        setOriginal(values);

        helper.setState(component, dynamicFieldsEdit(true));
      },

      save(e) {
        e.preventDefault();

        helper.setState(component, dynamicFieldsEdit(false));
      },

      cancel(e) {
        e.preventDefault();

        helper.setState(component, original);
      },

      clear(e) {
        e.preventDefault();

        Object.keys(original).forEach((key) => {
          if (typeof original[key] === 'boolean') original[key] = false;
          else original[key] = '';
        });

        helper.setState(component, original);
      },
    };
  };

  const handle = handlers();

  return (
    <>
      {editing ? (
        <form onSubmit={(e) => handle.save(e)}>
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
            {React.createElement(edit, {
              component: component,
              titles: titles,
              values: values,
              helper: helper,
            })}
          </FormGroup>
        </form>
      ) : (
        <article>
          <StackRow>
            <Typography variant='h2'>{titles.header}</Typography>

            <IconButton color='secondary' onClick={() => handle.edit()}>
              <EditIcon />
            </IconButton>
          </StackRow>
          <Divider sx={{ borderBottom: '1px solid', mb: 5 }} />

          {React.createElement(view, {
            values: values,
          })}
        </article>
      )}
    </>
  );
}

export default Article;
