import React, { useContext, useEffect, useState } from 'react';
import { InitialState } from '../../state/context';
import ArticleForm from './Articles/ArticleForm';
import ArticleView from './Articles/ArticleView';
import { observeEdit } from '../../functions/EditableObserver';

const Article = ({ rubric, viewer, editer }) => {

  const { resume, resumeDispatch, titles } = useContext(InitialState);

  const [original, setOriginal] = useState(resume[rubric]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    observeEdit(isEdit);

    return () => observeEdit(isEdit);
  }, [isEdit]);

  const handlers = () => {
    return {
      update(field, e) {
        resumeDispatch({ t: 'ART_CHANGE', p: [rubric, { [field]: e.currentTarget.value }] });
      },

      edit() {
        setOriginal(resume[rubric]);
        setIsEdit(true);
      },

      save(e) {
        e.preventDefault();
        setIsEdit(false);
      },

      cancel(e) {
        e.preventDefault();
        resumeDispatch({ t: 'ART_UPD', p: [rubric, original] });
        setIsEdit(false);
      },

      clear(e) {
        e.preventDefault();
        resumeDispatch({ t: 'ART_CLEAR', p: [rubric] });
      },
    };
  };

  const handle = handlers();

  return <>
    {isEdit ? (
      <ArticleForm titles={titles[rubric]} handle={handle}
        editer={editer} resume={resume[rubric]}
      />
    ) : (
      <ArticleView titles={titles[rubric]} edit={handle.edit}
        resume={resume[rubric]} viewer={viewer}
      />
    )}
  </>
}

export default Article;
