import React from "react";

interface IProps {
  onSubmit: (data: any) => void;
  schema: any;
}

export const FormBuilder = ({ onSubmit, schema }: IProps) => {
  const [data, setData] = React.useState<any>({});

  const elements = Object.keys(schema).map((key: string) => {
    let value = data[key] || undefined;
    let onChange = (value: string) =>
      setData((prev: any) => ({ ...prev, [key]: value }));

    let element = schema[key];

    return (
      <div key={key}>
        {element.label && <label id={`${key}-label`}>{element.label}</label>}
        <div>{element.render(value, onChange)}</div>
        {element.validation && (
          <label id={`${key}-error-label`}>{element.label}</label>
        )}
      </div>
    );
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onSubmit(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      {elements}
      <button>submit</button>
    </form>
  );
};

export default FormBuilder;
