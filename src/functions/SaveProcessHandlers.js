const SaveProcessHandlers = (resume, resumeDispatch, resumes,
  resumesDispatch, anyEditMode, accessOriginal, setSave) => {
  const commonChecks = () => {
    if (anyEditMode) {
      alert('Some sections in edit mode');
      return false;
    }

    if (resume.name === '') {
      alert('name cannot be empty');
      return false;
    }

    return true;
  }
  return {

    update() {
      if (!commonChecks()) return;
      if (resumes.some((item) => item.name === resume.name
        && item.name !== accessOriginal().name))
        return alert('resume with this name already exists');

      if (accessOriginal().name === '') {
        accessOriginal(resume);
        resumesDispatch({ t: 'RES_SAVE', p: resume });
        alert('new resume saved');
      } else {
        accessOriginal(resume);
        resumesDispatch({
          t: 'RES_UPDATE',
          p: { resume, originalName: accessOriginal().name }
        });
        alert('resume updated');
      }
      setSave(false);
    },

    new() {
      if (!commonChecks()) return;
      if (resumes.some((item) => item.name === resume.name))
        return alert('resume with this name already exists');

      accessOriginal(resume);
      resumesDispatch({ t: 'RES_SAVE', p: resume });
      alert('saved as new resume');
      setSave(false);
    },

    updateName(value) {
      resumeDispatch({ t: 'RES_NAME', p: value });
    },

    cancel() {
      setSave(false);
    },
  }
}

export default SaveProcessHandlers;
