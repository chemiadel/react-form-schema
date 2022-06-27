interface IField {
  name: string;
}

interface IForm {
  name: string;
  fields: IField[];
}

const form: IForm = {
  name: "someName",
  fields: [
    {
      name: "firstName",
    },
  ],
};

//get
type P = keyof IForm['fields'];


type data<IForm> = {
    [key: in ke]
};
