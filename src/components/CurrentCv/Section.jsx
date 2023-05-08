import React, { useState } from 'react';
import { FormGroup, IconButton, Typography, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { genericStyles } from './../../mainTheme/localStyles';

const Section = ({ titles, values, component, helper, edit, view }) => {
  const [original, setOriginal] = useState([]);

  const handlers = () => {
    return {
      add() { 
        const setId = (list) => {
          if (list.length > 0) {
            return Math.max(...list.map((x) => x.id)) + 1;
          } else {
            return 1;
          }
        };

        const defaults = {...titles.default};
        defaults.editing = true;

        const newArticle = {
          ...defaults,
          id: setId(values),
          init: true,
        };

        const section = [...values];

        section.push(newArticle);

        helper.setState(component, section);
      },

      edit(id) {
        const updateOriginal = (newArticles) => {
          const copyArticle = newArticles.find((article) => article.id === id);

          const index = original.findIndex(
            (article) => article.id === id,
          );
          if (index !== -1) {
            return [
              ...original.slice(0, index),
              { ...original[index], ...copyArticle },
              ...original.slice(index + 1),
            ];
          } else {
            return [...original, { id, ...copyArticle }];
          }
        };

        const newArticles = [...values];

        const originalArticle = updateOriginal(newArticles);

        newArticles.map((article) => {
          if (article.id === id) {
            article.editing = true;

            return article;
          }

          return article;
        });

        setOriginal(originalArticle);

        helper.setState(component, newArticles);
      },

      delete(e, id) {
        e.preventDefault();

        const newArticles = values.filter(
          (article) => article.id !== id,
        );

        helper.setState(component, newArticles);
      },

      save(e, id) {
        e.preventDefault();

        const newArticles = values.map((article) => {
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

        helper.setState(component, newArticles);
      },

      cancel(e, id) {
        e.preventDefault();

        let newArticles = [...values];

        newArticles = newArticles.map((article) => {
          if (article.id === id) {
            article = original.find(
              (article) => article.id === id,
            );

            article.editing = false;
          }

          return article;
        });

        helper.setState(component, newArticles);
      },
    };
  }

  const { ArticleStyled, SectionStyled, StackRow, ManageBtnsWrapper } =
    genericStyles;

  const handle = handlers();

  return (
    <SectionStyled>
      <StackRow>
        <Typography variant='h2'>{titles.header}</Typography>

        <IconButton color='secondary' onClick={handle.add}>
          <AddIcon />
        </IconButton>
      </StackRow>
      <Divider sx={{ borderBottom: '1px solid' }} />
      {values.length > 0 &&
        values.map((value) =>
          value.editing ? (
            <form
              key={value.id}
              onSubmit={(e) => handle.save(e, value.id)}
            >
              <FormGroup>
                <ManageBtnsWrapper>
                  <IconButton color='secondary' type='submit'>
                    <CheckOutlinedIcon />
                  </IconButton>

                  {!value.init && (
                    <IconButton
                      color='secondary'
                      onClick={(e) => handle.cancel(e, value.id)}
                    >
                      <CloseOutlinedIcon />
                    </IconButton>
                  )}
                  <IconButton
                    color='secondary'
                    onClick={(e) => handle.delete(e, value.id)}
                  >
                    <DeleteForeverOutlinedIcon />
                  </IconButton>
                </ManageBtnsWrapper>

                {React.createElement(edit, {
                  component: component,
                  titles: titles,
                  values: value,
                  helper: helper,
                })}
              </FormGroup>
            </form>
          ) : (
            <ArticleStyled key={value.id}>
              <StackRow>
                <Typography variant='h3'>{value.title}</Typography>

                <IconButton
                  color='secondary'
                  size='medium'
                  onClick={() => handle.edit(value.id)}
                >
                  <EditIcon />
                </IconButton>
              </StackRow>

              {React.createElement(view, {
                component: component,
                titles: titles,
                values: value,
              })}
              <Divider light variant='inset' />
            </ArticleStyled>
          ),
        )}
    </SectionStyled>
  );
}

export default Section;
