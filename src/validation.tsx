import { useEffect, useState } from "react";
import type { ISchema } from "./schema";

export const validate = (data: any, schema: ISchema) => {
  const errors: any = {};
  for (let i in schema) {
    let elementValidations = schema[i].validation;
    if (elementValidations) {
      elementValidations.map((validation) => {
        if (typeof validation.rule === "function") {
          if (!validation.rule(data[i])) {
            errors[i] = validation.errorMessage;
          }

          return;
        }

        if (validation.rule instanceof RegExp) {
        }
      });
    }
  }

  return errors;
};

export default validate;
