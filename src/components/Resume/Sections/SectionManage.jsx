import { useEffect, useState } from 'react';
import SectionEdit from "./SectionEdit";
import SectionView from "./SectionView";
import { enterEdit, exitEdit, observeEdit } from '../../../functions/EditableObserver';

const SectionManage = ({ field, setFields, updateResume, viewer, editer, titles, id, initial }) => {
  const [original, setOriginal] = useState([]);
  const [init, setInit] = useState(true);
  const [isEdit, setIsEdit] = useState(initial);

 useEffect(() => {
    observeEdit(isEdit);

    return () => observeEdit(isEdit);
  }, [isEdit]);

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
        <SectionEdit init={init}
          editer={editer} titles={titles}
          view={field} field={field}
          setFields={setFields} handleAction={handleAction}
        />
      ) : (
        <SectionView viewer={viewer}
          field={field} titles={titles}
          handleAction={handleAction}
        />
      )}
  </>
};

export default SectionManage;
