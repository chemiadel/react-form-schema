"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (data, schema) => {
    const errors = {};
    for (let i in schema.fields) {
        let elementValidations = schema.fields[i].validation;
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
exports.validate = validate;
exports.default = exports.validate;
