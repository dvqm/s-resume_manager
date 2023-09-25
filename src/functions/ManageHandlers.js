import { resumeTemplate } from '../state/templates.js';
import save from './ManageHandlersSave.js';
import rename from './ManageHandlersRename.js';
import duplicate from './ManageHandlersDuplicate.js';

const handlers = (accessResume, accessResumes, editMode, setSave, setPrevName, prevName) => {
  const isUnique = () => {
    return accessResumes().every(
      (cv) => cv.name !== accessResume().name,
    );
  }

  return {
    new: () => accessResume(resumeTemplate),

    change: (e, field) => accessResume({ [field]: e.target.value }),

    cancelBtn: () => {
      setSave(false);
      accessResume({ name: prevName });
    },

    save: (boolean) => save(boolean, editMode,
      setSave, setPrevName, accessResume,
      accessResumes, prevName, isUnique),

    rename: () => rename(prevName, isUnique, setSave, accessResume, accessResumes),

    cancel: () => {
      const index = accessResumes().findIndex((item) => item.name === accessResume().name);

      if (index === -1) accessResume(resumeTemplate);
      else accessResume(accessResumes()[index]);
    },

    delete: () => {
      const updatedResumes = accessResumes().filter((item) => item.name !== accessResumes().name);

      accessResumes().length === updatedResumes.length &&
        accessResumes().every((element, index) => element === updatedResumes[index]);

      accessResumes(updatedResumes);
      accessResume(resumeTemplate);
    },

    duplicate: () => duplicate(accessResume, accessResumes),

  }
}

export default handlers;
