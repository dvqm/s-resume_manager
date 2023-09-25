const duplicate = (accessResume, accessResumes) => {
  const isUnique = (name) => !accessResumes().some((item) => item.name === name);

  const makeDuplicate = (name) => {
    if (isUnique(name)) {
      const resume = {...accessResume()};
      resume.name = name;

      const resumes = [...accessResumes(), resume];
      accessResumes(resumes);
    } else {
      makeDuplicate(`${name} _copy`);
    }
  };

  makeDuplicate(accessResume().name);
}

export default duplicate;
