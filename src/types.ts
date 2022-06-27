export interface ISchema {
  title?: string;
  description?: string;
  fields: IField[];
}

export interface IField {
  name: string;
  label?: string;
  render: (value: string, onChange: (value: string) => void) => JSX.Element;
  validation?: IValidation[];
}

interface IValidation {
  rule: RegExp | ((value: string) => boolean);
  errorMessage: string;
}
