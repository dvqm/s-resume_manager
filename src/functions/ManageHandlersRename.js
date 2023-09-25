const rename = (prevName, isUnique, setSave, accessResume, accessResumes) => {
  const { name } = { ...accessResume() };

  const actions = new Map([
    [ // Can be renamed
      () => isUnique() && prevName !== name,
      () => {
        const index = accessResumes().findIndex(
          (cv) => cv.name === prevName,
        );
        accessResumes()[index].name = name;
        setSave(false);
        accessResumes(accessResumes());
      },
    ],
    [ // can't be renamed, new name exists in the array.
      () => !isUnique() && prevName !== name,
      () => alert(
        'There is a resume with such name. Please, choose other name.',
      ),
    ],
  ]);

  actions.forEach((action, condition) => condition() && action());
}

export default rename;
