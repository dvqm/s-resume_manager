import React, { useCallback, useContext, useEffect, useState } from "react";
import { InitialState } from "../../state/context";
import ArticleForm from "./Articles/ArticleForm";
import ArticleView from "./Articles/ArticleView";
import ArticleHandlers from "../../functions/ArticleHandlers";

const Article = ({ rubric, viewer, editer }) => {
  const { resume, resumeDispatch, titles, setAnyEditMode } =
    useContext(InitialState);

  const [original, setOriginal] = useState(resume[rubric]);
  const [isEdit, setIsEdit] = useState(false);

  const checkAnyEdit = useCallback(
    (bool) => {
      setAnyEditMode(bool);
    },
    [setAnyEditMode],
  );

  useEffect(() => {
    checkAnyEdit(isEdit);
    return () => checkAnyEdit(isEdit);
  }, [isEdit, checkAnyEdit]);

  const handle = ArticleHandlers(
    rubric,
    setIsEdit,
    resumeDispatch,
    resume,
    setOriginal,
    original,
  );

  return (
    <>
      {isEdit ? (
        <ArticleForm
          titles={titles[rubric]}
          handle={handle}
          editer={editer}
          resume={resume[rubric]}
        />
      ) : (
        <ArticleView
          titles={titles[rubric]}
          edit={handle.edit}
          resume={resume[rubric]}
          viewer={viewer}
        />
      )}
    </>
  );
};

export default Article;
