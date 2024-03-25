const ManageHandlers = (
  resume,
  resumes,
  resumeDispatch,
  resumesDispatch,
  accessOriginal,
) => ({
  restore() {
    resumeDispatch({ t: "RES_UPD", p: accessOriginal() });
  },

  new() {
    resumeDispatch({ t: "RES_NEW" });
  },

  delete() {
    resumesDispatch({ t: "RES_DEL", p: resume.name });
    resumeDispatch({ t: "RES_NEW" });
  },

  clone() {
    if (resume.name === "") return alert("Resume haven't been saved");
    if (accessOriginal().name === "") return alert("Resume haven't been saved");

    const makeDuplicate = (name) => {
      if (resumes.every((item) => item.name !== name)) {
        const clonedResume = { ...resume, name };
        resumesDispatch({ t: "RES_SAVE", p: clonedResume });
        resumeDispatch({ t: "RES_UPD", p: clonedResume });
        return;
      } else {
        makeDuplicate(`${name} _copy`);
      }
    };
    makeDuplicate(resume.name);
  },
});

export default ManageHandlers;
