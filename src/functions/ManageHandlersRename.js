const rename = (prevName, isUnique, setSave, accessResume, accessResumes) => {
  const { name } = { ...accessResume() };

  const actions = [
    {
      condition: () => isUnique() && prevName !== name,
      action: () => {
        accessResumes(() => {
          const updatedResumes = [...accessResumes()];
          const index = updatedResumes.findIndex(
            (resume) => resume.name === prevName,
          );
          updatedResumes[index].name = name;
          return updatedResumes;
        });

        setSave(false);
      },
    },
    {
      condition: () => !isUnique() && prevName !== name,
      action: () => alert(
        'There is a resume with such name. Please, choose other name.',
      ),
    },
  ];

  for (const { condition, action } of actions) {
    if (condition()) {
      action();
      break;
    }
  }
}

export default rename;
