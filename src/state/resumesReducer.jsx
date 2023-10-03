import { examples } from '../state/templates';

const resumesReducer = (s, a) => {
  const handlers = [
    {
      t: 'RES_SAVE',
      handler: (s, p) => {
        const index = s.findIndex((item) => item.name === p.name)
        return index === -1 && [...s, p]
      }
    },

    {
      t: 'RES_UPDATE',
      handler: (s, p) => {
        const [rubric, index, value] = p;
        const updated = [...s[rubric]];
        updated[index] = value;
        return {
          ...s,
          [rubric]: updated,
        }
      }
    },

    {
      t: 'RES_ADD_MOCK',
      handler: (s) => {
        const resumesMap = new Map(s.map(resume => [resume.mock, resume]));
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
