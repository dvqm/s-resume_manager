const SaveProcessHandlers = (
  resume, resumeDispatch,
  resumes,
  resumesDispatch,
  anyEditMode, accessOriginal,
  setSave, setToast) => {
  const commonChecks = () => {
    if (anyEditMode) {
      setToast([ true, 'orange', 'Some sections in edit mode' ]);
      return false;
    }

    if (resume.name === '') {
      setToast([ true, 'orange', 'name cannot be empty' ]);
      return false;
    }

    return true;
  }
  return {

    update() {
      if (!commonChecks()) return;
      if (resumes.some((item) => item.name === resume.name
        && item.name !== accessOriginal().name)) {
        setToast([ true, 'red', 'resume with this name already exists' ]);
        return
      }

      if (accessOriginal().name === '') {
        // setToast([ true, 'green', 'new resume saved' ]);
        alert('new resume saved');
        accessOriginal(resume);
        resumesDispatch({ t: 'RES_SAVE', p: resume });

      } else {
        // setToast([ true, 'green', 'resume updated' ]);
        alert('resume updated');
        accessOriginal(resume);
        resumesDispatch({
          t: 'RES_UPDATE',
          p: { resume, originalName: accessOriginal().name }
        });
      }

        setSave(false);
    },

    new() {
      if (!commonChecks()) return;
      if (resumes.some((item) => item.name === resume.name)) {
        setToast([ true, 'red', 'resume with this name already exists' ]);
        return
      }

      // setToast([ true, 'green', 'saved as new resume' ]);
      alert('saved as new resume');
      accessOriginal(resume);
      resumesDispatch({ t: 'RES_SAVE', p: resume });
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
