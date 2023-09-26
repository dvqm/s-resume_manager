const save = (boolean, editMode,
  setSave, setPrevName, accessResume,
  accessResumes, prevName, isUnique) => {
  const checkIfEmpty = () => {
    return Object.values(accessResume().about).every(value => {
      if (typeof value === 'boolean') {
        return true;
      }
      return value === '';
    });
  };

  if (editMode) return alert('One or more sections in edit mode, please check and save data.')

  if (checkIfEmpty()) return alert('Section About can\'t be empty');

  let updatedResumes;

  setSave(true);

  const actions = [
    { // first open
      condition: () => boolean,
      action: () => {
        setPrevName(accessResume().name);
        setSave(boolean);
      },
    },
    { // update existed
      condition: () => !isUnique() && prevName === accessResume().name,
      action: () => {
        alert('Updated existed');
        updatedResumes = accessResumes().map((item) => {
          if (item.name === accessResume().name) {
            return accessResume();
          }
          return item;
        });
        setSave(boolean);
        accessResumes(updatedResumes);
      },
    },
    { // name can not be empty
      condition: () => accessResume().name.length === 0,
      action: () => {
        alert('Name can\'t be empty');
      }
    },
    { // this name already exists
      condition: () => !isUnique() && accessResume().name !== prevName,
      action: () => {
        alert('this name already exist');
        setSave(true);
      },
    },
    { // save as new
      condition: () => isUnique() && accessResume().name.length > 0 && accessResume().name !== prevName,
      action: () => {
        alert('Saved as new');
        setSave(false);
        const updatedResumes = [...accessResumes(), accessResume()];
        accessResumes(updatedResumes);
      },
    },
  ];

  for (const { condition, action } of actions) {
    if (condition()) {
      action();
      break;
    }
  }

}

export default save;
