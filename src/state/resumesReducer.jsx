import { examples } from "../state/templates";

const setLocalStorage = (data) => {
  localStorage.setItem(
    "data",
    JSON.stringify({
      resumes: data,
      timestamp: new Date().getTime(),
    }),
  );
};

const resumesReducer = (s, a) => {
  const handlers = [
    {
      t: "RES_LOAD",
      handler: (_, p) => [...p],
    },

    {
      t: "RES_SAVE",
      handler: (s, p) => {
        const index = s.findIndex((item) => item.name === p.name);
        const result = index === -1 ? [...s, p] : s;
        setLocalStorage(result);
        return result;
      },
    },

    {
      t: "RES_UPDATE",
      handler: (s, p) => {
        const result = [
          ...s.map((item) => (item.name === p.originalName ? p.resume : item)),
        ];
        setLocalStorage(result);
        return result;
      },
    },

    {
      t: "RES_DEL",
      handler: (s, p) => {
        const result = s.filter((item) => item.name !== p);
        setLocalStorage(result);
        return result;
      },
    },

    {
      t: "RES_ADD_MOCK",
      handler: (s) => {
        const resumesMap = new Map(
          s.map((resume) =>
            resume.hasOwnProperty("mock")
              ? [resume.mock, resume]
              : [resume.name, resume],
          ),
        );
        examples.forEach((mockedResume) => {
          resumesMap.set(mockedResume.mock, mockedResume);
        });

        setLocalStorage(Array.from(resumesMap.values()));

        return Array.from(resumesMap.values());
      },
    },

    {
      t: "RES_DEL_MOCK",
      handler: (s) => {
        const result = s.filter((resume) => !resume.hasOwnProperty("mock"));
        setLocalStorage(result);
        return result;
      },
    },
  ];

  const actions = handlers.find((handler) => handler.t === a.t);

  if (a) {
    return actions.handler(s, a.p);
  }

  return s;
};

export default resumesReducer;
