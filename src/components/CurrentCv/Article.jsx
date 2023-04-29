import React from 'react';
import { FormGroup, IconButton, Divider, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { genericStyles } from './../../mainTheme/localStyles';

const { StackRow, ManageBtnsWrapper } = genericStyles;

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.edit = props.edit;

    this.view = props.view;

    this.state = {
      keyName: props.keyName,
      original: props.dynamic,
    };

    this.helper = props.helper;

    this.handle = this.handlers(this);
  }

  handlers(context) {
    const dynamicFieldsEdit = (bool) => {
      const values = { ...context.props.dynamic };

      values.editing = bool

      return values;
    }

    return {
      edit() {
        context.setState({
          ...context.state,
          original: dynamicFieldsEdit(false),
        }, () => {

          console.log('original: ', context.state.original);
          context.helper.setState(context.state.keyName, dynamicFieldsEdit(true));
        })
      },

      save(e) {
        e.preventDefault();

        context.helper.setState(context.state.keyName, dynamicFieldsEdit(false));
      },

      cancel(e) {
        e.preventDefault();
        const values = { ...context.state.original };

        context.helper.setState(
          context.state.keyName,
          values,
        );
      },

      clear(e) {
        e.preventDefault();

        context.setState({
          ...context.state,
          original: context.props.dynamic,
        });

        const values = { ...context.props.dynamic };

        Object.keys(values).forEach((key) => {
          if (typeof values[key] === 'boolean') values[key] = false;
          else values[key] = null;
        });

        context.helper.setState(context.state.keyName, values);
      },
    };
  }

  render() {
    const { editing } = this.props.dynamic;
    return (
      <>
        {editing ? (
          <form onSubmit={(e) => this.handle.save(e)}>
            <h2>{this.props.static.header}</h2>

            <Divider sx={{ borderBottom: '1px solid', mb: 5 }} />

            <FormGroup>
              <ManageBtnsWrapper>
                <IconButton color='secondary' type='submit'>
                  <CheckOutlinedIcon />
                </IconButton>

                <IconButton
                  color='secondary'
                  onClick={(e) => this.handle.cancel(e)}
                >
                  <CloseOutlinedIcon />
                </IconButton>

                <IconButton
                  color='secondary'
                  onClick={(e) => this.handle.clear(e)}
                >
                  <DeleteForeverOutlinedIcon />
                </IconButton>
              </ManageBtnsWrapper>
              {React.createElement(this.edit, {
                keyName: this.state.keyName,
                static: this.props.static,
                dynamic: this.props.dynamic,
                helper: this.helper,
              })}
            </FormGroup>
          </form>
        ) : (
            <article>
              <StackRow>
                <Typography variant='h2'>{this.props.static.header}</Typography>

                <IconButton color='secondary' onClick={() => this.handle.edit()}>
                  <EditIcon />
                </IconButton>
              </StackRow>
              <Divider sx={{ borderBottom: '1px solid', mb: 5 }} />

              {React.createElement(this.view, {
                dynamic: this.props.dynamic,
              })}
            </article>
          )}
      </>
    );
  }
}

export default Article;
