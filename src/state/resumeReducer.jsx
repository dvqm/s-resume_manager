import { syncData } from "../database/firebase";
import { defaultValues, template } from "./templates";

const resumeReducer = (s, a) => {
  const handlers = [
    {
      t: "RES_UPD",
      handler: (_, p) => {
        syncData()
        return { ...p } },
    },

    {
      t: "RES_NAME",
      handler: (s, p) => ({ ...s, name: p }),
    },
    {
      t: "RES_NEW",
      handler: () => ({ ...template }),
    },

    {
      t: "ART_CHANGE",
      handler: (s, p) => {
        const [rubric, value] = p;
        return {
          ...s,
          [rubric]: {
            ...s[rubric],
            ...value,
          },
        };
      },
    },

    {
      t: "ART_UPD",
      handler: (s, p) => {
        const [rubric, value] = p;
        return {
          ...s,
          [rubric]: value,
        };
      },
    },

    {
      t: "ART_CLEAR",
      handler: (s, p) => {
        const [rubric] = p;
        const cleared = Object.fromEntries(
          Object.keys(s[rubric]).map((key) => [key, ""]),
        );
        return {
          ...s,
          [rubric]: cleared,
        };
      },
    },

    {
      t: "SEC_ADD",
      handler: (s, p) => {
        const [rubric] = p;
        return {
          ...s,
          [rubric]: [...s[rubric], defaultValues[rubric]],
        };
      },
    },

    {
      t: "SEC_UPD",
      handler: (s, p) => {
        const [rubric, index, field] = p;
        return {
          ...s,
          [rubric]: s[rubric].map((item, i) => {
            if (i === index) {
              return {
                ...item,
                ...field,
              };
            }
            return item;
          }),
        };
      },
    },

    {
      t: "SEC_RESTORE",
      handler: (s, p) => {
        const [rubric, index, value] = p;
        return {
          ...s,
          [rubric]: s[rubric].map((item, i) => (i === index ? value : item)),
        };
      },
    },

    {
      t: "SEC_DEL",
      handler: (s, p) => {
        const [rubric, index] = p;
        return {
          ...s,
          [rubric]: s[rubric].filter((_, i) => i !== index),
        };
      },
    },
  ];

  const actions = handlers.find((handler) => handler.t === a.t);

  if (a) {
    return actions.handler(s, a.p);
  }

  return s;
};

export default resumeReducer;
