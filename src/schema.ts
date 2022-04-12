export interface ISchema {
  [key: string]: IField;
}

interface IField {
  title?: string;
  label?: string;
  render: (value: string, onChange: (value: string) => void) => JSX.Element;
  validation?: IValidation[];
}

type cb = (value: string) => boolean;

interface IValidation {
  rule: RegExp | ((value: string) => boolean);
  errorMessage: string;
}
