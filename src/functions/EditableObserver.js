let editMode = false;

export const observeEdit = (editState) => {
  editMode = editState;
};

export const checkEdit = () => editMode;
