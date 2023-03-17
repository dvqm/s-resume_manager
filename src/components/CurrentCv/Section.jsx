import React from 'react';
import { FormGroup, IconButton, Typography, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { currentCvStyles } from '../../mainTheme/localStyles.js';

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.edit = props.edit;

    this.view = props.view;

    this.state = {
      keyName: props.keyName,
      default: props.static.default,
      originalArticles: [],
    };

    this.helper = props.helper;

    this.handle = this.handlers(this);
  }

  handlers(context) {
    return {
      add() {
        const setId = (list) => {
          if (list.length > 0) {
            return Math.max(...list.map((x) => x.id)) + 1;
          } else {
            return 1;
          }
        };

        const newArticle = {
          ...context.props.static.default,
          id: setId(context.props.dynamic),
          init: true,
        };

        const section = [...context.props.dynamic];

        section.push(newArticle);

        context.helper.setState(context.state.keyName, section);
      },

      edit(id) {
        const updateOriginalArticles = (newArticles) => {
          const originalArticles = [...context.state.originalArticles];

          const copyArticle = newArticles.find((article) => article.id === id);

          const index = originalArticles.findIndex(
            (article) => article.id === id,
          );
          if (index !== -1) {
            return [
              ...originalArticles.slice(0, index),
              { ...originalArticles[index], ...copyArticle },
              ...originalArticles.slice(index + 1),
            ];
          } else {
            return [...originalArticles, { id, ...copyArticle }];
          }
        };

        const newArticles = [...context.props.dynamic];

        const originalArticles = updateOriginalArticles(newArticles);

        newArticles.map((article) => {
          if (article.id === id) {
            article.editing = true;

            return article;
          }

          return article;
        });

        context.setState(
          { ...context.state, originalArticles: originalArticles },
          () => context.helper.setState(context.state.keyName, newArticles),
        );
      },

      delete(e, id) {
        e.preventDefault();

        const newArticles = context.props.dynamic.filter(
          (article) => article.id !== id,
        );

        context.helper.setState(context.state.keyName, newArticles);
      },

      save(e, id) {
        e.preventDefault();

        const newArticles = context.props.dynamic.map((article) => {
          if (article.id === id) {
            article.editing = false;

            if (article.init) delete article.init;
          }

          return article;
        });

        newArticles.sort((a, b) => {
          if (a.startDate < b.startDate) return -1;
          if (a.startDate > b.startDate) return 1;
          return 0;
        });

        context.helper.setState(context.state.keyName, newArticles);
      },

      cancel(e, id) {
        e.preventDefault();

        let newArticles = [...context.props.dynamic];

        newArticles = newArticles.map((article) => {
          if (article.id === id) {
            article = context.state.originalArticles.find(
              (article) => article.id === id,
            );

            article.editing = false;
          }

          return article;
        });

        context.helper.setState(context.state.keyName, newArticles);
      },
    };
  }

  render() {
    const { ArticleStyled, FormControlRowEnd, FormControlRowStart } =
      currentCvStyles;

    return (
      <section>
        <FormControlRowStart>
          <h2>{this.props.static.header}</h2>

          <IconButton color='secondary' onClick={this.handle.add}>
            <AddIcon />
          </IconButton>
        </FormControlRowStart>
        <Divider sx={{ borderBottom: '1px solid' }} />
        {this.props.dynamic.length > 0 &&
          this.props.dynamic.map((section) =>
            section.editing ? (
              <form
                key={section.id}
                onSubmit={(e) => this.handle.save(e, section.id)}
              >
                <FormGroup>
                  <FormControlRowEnd>
                    <IconButton color='secondary' type='submit'>
                      <CheckOutlinedIcon />
                    </IconButton>

                    {!section.init && (
                      <IconButton
                        color='secondary'
                        onClick={(e) => this.handle.cancel(e, section.id)}
                      >
                        <CloseOutlinedIcon />
                      </IconButton>
                    )}
                    <IconButton
                      color='secondary'
                      onClick={(e) => this.handle.delete(e, section.id)}
                    >
                      <DeleteForeverOutlinedIcon />
                    </IconButton>
                  </FormControlRowEnd>

                  {React.createElement(this.edit, {
                    keyName: this.props.keyName,
                    static: this.props.static,
                    section: section,
                    helper: this.props.helper,
                  })}
                </FormGroup>
              </form>
            ) : (
              <ArticleStyled key={section.id}>
                <FormControlRowStart>
                  <Typography variant='h5'>{section.title}</Typography>

                  <IconButton
                    color='secondary'
                    size='medium'
                    onClick={() => this.handle.edit(section.id)}
                  >
                    <EditIcon />
                  </IconButton>
                </FormControlRowStart>

                {React.createElement(this.view, {
                  keyName: this.props.keyName,
                  static: this.props.static,
                  section: section,
                })}
                <Divider light variant='inset' />
              </ArticleStyled>
            ),
          )}
      </section>
    );
  }
}

export default Section;
