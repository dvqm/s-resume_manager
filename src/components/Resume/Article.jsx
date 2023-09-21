import React, { useContext, useState } from 'react';
import { Divider, Typography, IconButton } from '@mui/material';
import { genericStyles } from './../../mainTheme/localStyles';
import { InitialState } from '../../state/context';
import ArticleForm from './Articles/ArticleForm';
import ArticleView from './Articles/ArticleView';

const Article = ({ rubric, viewer, editer }) => {
  const { StackRow } = genericStyles;

  const { accessResume, readTitles } = useContext(InitialState);

  const [fields, setFields] = useState(accessResume()[rubric]);
  const [original, setOriginal] = useState(fields);
  const [isEdit, setIsEdit] = useState(false);
  const titles = readTitles()[rubric];

  const handlers = () => {
    return {
      edit() {
        setOriginal(accessResume()[rubric]);
        setIsEdit(true);
      },

      save(e) {
        e.preventDefault();
        accessResume({ [rubric]: fields });
        setIsEdit(false);
      },

      cancel(e) {
        e.preventDefault();
        setFields(original);
        setIsEdit(false);
      },

      clear(e) {
        e.preventDefault();
        const cleared = { ...fields };

        Object.keys(cleared).forEach((key) => cleared[key] = '');

        setFields(cleared);
      },
    };
  };

  const handle = handlers();

  return <>
    {isEdit ? (
      <ArticleForm titles={titles} handle={handle} editer={editer}
        fields={fields} setFields={setFields} rubric={rubric}
      />
    ) : (
      <ArticleView titles={titles} handle={handle}
        fields={fields} viewer={viewer}
      />
    )}
  </>
}

export default Article;
