import React, { useEffect } from "react";
import { ISchema } from "./types";
import validate from "./validation";

interface IProps {
  onSubmit: (data: any) => void;
  schema: any;
}

export const FormBuilder = ({ onSubmit, schema }: IProps) => {
  const [errors, setErrors] = React.useState<any>({});
  const [data, setData] = React.useState<any>({});
  const [elements, setElements] = React.useState<JSX.Element[]>();

  //Generate Elements
  useEffect(() => {
    setElements(UIGenerator([data, setData], errors, schema));
  }, [schema, data, errors]);

  //Validating data
  useEffect(() => {
    setErrors(validate(data, schema));
  }, [data]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.error({ errors });
    onSubmit(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      {elements}
      <button>submit</button>
    </form>
  );
};

export const UIGenerator = (
  state: any,
  errors: any,
  schema: ISchema
): JSX.Element[] => {
  const [data, setData] = state;

  const elements = schema.fields.map((field) => {
    const key = field.name;

    //controllers
    const value = data[key] || undefined;
    const onChange = (value: string) =>
      setData((prev: any) => ({ ...prev, [key]: value }));

    return (
      <div id={key} key={key}>
        {/*Title Label */}
        {field.label && <label id={`${key}-label`}>{field.label}</label>}
        {/*Input Field */}
        <div>{field.render(value, onChange)}</div>
        {/*Error Label */}
        {field.validation && (
          <label id={`${key}-error-label`}>{errors[key]}</label>
        )}
      </div>
    );
  });

  return elements;
};

export default FormBuilder;
