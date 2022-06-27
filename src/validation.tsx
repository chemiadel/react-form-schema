import type { ISchema, IField } from "./types";

// type fields = {
//   [key: ]
// }
// type Data = {
//   [key: ISchema["fields"]['']]: string;
// };

export const validate = (data: any, schema: ISchema) => {
  const errors: any = {};

  schema.fields.forEach((field) => {
    let validations = field.validation;

    validations?.forEach((validation) => {
      //validate func rule
      if (typeof validation.rule === "function") {
        if (!validation.rule(data[field.name])) {
          field.name = validation.errorMessage;
        }

        return;
      }

      //validate regex rule
      if (validation.rule instanceof RegExp) {
        validation.rule.test(data[field.name]);
      }
    });
  });

  return errors;
};

export default validate;
