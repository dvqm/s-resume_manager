import { useCallback, useEffect, useState } from 'react';
import SectionEdit from "./SectionEdit";
import SectionView from "./SectionView";

const SectionManage = ({ id, article, rubric, resumeDispatch, viewer, editer, titles, initial, setAnyEditMode }) => {
  const [original, setOriginal] = useState();
  const [init, setInit] = useState(true);
  const [isEdit, setIsEdit] = useState(initial);

const checkAnyEdit = useCallback((bool) => {
    setAnyEditMode(bool);
  }, [setAnyEditMode]);

  useEffect(() => {
    checkAnyEdit(isEdit);
    return () => checkAnyEdit(isEdit);
  }, [isEdit, checkAnyEdit ]);

  const update = (field, e) => {
    let value;

    if (field === 'currentlyWork') value = e.currentTarget.checked;
    else value = e.currentTarget.value;

    resumeDispatch({ t: 'SEC_UPD', p: [rubric, id, { [field]: value }] })
  };

  const save = () => {
    setIsEdit(false);
    setInit(false);
  }

  const edit = () => {
    setOriginal(article);
    setIsEdit(true);
  }

  const remove = () => resumeDispatch({ t: 'SEC_DEL', p: [rubric, id] });

  const restore = () => {
    resumeDispatch({ t: 'SEC_RESTORE', p: [rubric, id, original] });
    setIsEdit(false);
  }

  return <>
    {
      isEdit ? (
        <SectionEdit init={init}
          editer={editer} titles={titles}
          article={article} update={update}
          save={save} restore={restore} remove={remove}
        />
      ) : (
        <SectionView viewer={viewer}
          article={article} titles={titles}
          edit={edit}
        />
      )}
  </>
};

export default SectionManage;
