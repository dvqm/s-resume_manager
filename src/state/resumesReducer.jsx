import { examples } from '../state/templates';

const resumesReducer = (s, a) => {
  const handlers = [
    {
      t: 'RES_LOAD',
      handler: (_, p) => [...p],
    },

    {
      t: 'RES_SAVE',
      handler: (s, p) => {
        const index = s.findIndex((item) => item.name === p.name)
        return index === -1 ? [...s, p] : s;
      }
    },

    {
      t: 'RES_UPDATE',
      handler: (s, p) => [...s.map((item) => item.name === p.originalName ? p.resume : item)]
    },

    {
      t: 'RES_DEL',
      handler: (s, p) => s.filter((item) => item.name !== p)
    },

    {
      t: 'RES_ADD_MOCK',
      handler: (s) => {
        const resumesMap = new Map(s.map(resume => resume.hasOwnProperty('mock')
          ? [resume.mock, resume]
          : [resume.name, resume]));
        examples.forEach(mockedResume => {
          resumesMap.set(mockedResume.mock, mockedResume);
        });
        return Array.from(resumesMap.values());
      }
    },

    {
      t: 'RES_DEL_MOCK',
      handler: (s) => {
        return s.filter((resume) => !resume.hasOwnProperty('mock'));
      }
    },
  ];

  const actions = handlers.find(handler => handler.t === a.t);

  if (a) {
    return actions.handler(s, a.p);
  }

  return s;
}

export default resumesReducer;
