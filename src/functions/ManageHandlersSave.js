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

  const actions = new Map([
    [ // first open
      () => boolean,
      () => {
        setPrevName(accessResume().name);
        setSave(boolean);
      },
    ],
    [ // update existed
      () => !isUnique() && prevName === accessResume().name,
      () => {
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
    ],
    [ // name can not be empty
      () => accessResume().name.length === 0,
      () => {
        alert('Name can\'t be empty');
      }
    ],
    [ // this name already exists
      () => !isUnique() && accessResume().name !== prevName,
      () => {
        alert('this name already exist');
        setSave(true);
      },
    ],
    [ // save as new
      () => isUnique() && accessResume().name.length > 0 && accessResume().name !== prevName,
      () => {
        alert('Saved as new');
        setSave(false);
        const updatedResumes = [...accessResumes(), accessResume()];
        accessResumes(updatedResumes);
      },
    ],
  ]);

  actions.forEach((action, condition) => condition() && action());

}

export default save;
