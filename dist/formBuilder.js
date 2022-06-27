"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIGenerator = exports.FormBuilder = void 0;
const react_1 = __importStar(require("react"));
const validation_1 = __importDefault(require("./validation"));
const FormBuilder = ({ onSubmit, schema }) => {
    const [errors, setErrors] = react_1.default.useState({});
    const [data, setData] = react_1.default.useState({});
    const [elements, setElements] = react_1.default.useState();
    //Generate Elements
    (0, react_1.useEffect)(() => {
        setElements((0, exports.UIGenerator)([data, setData], errors, schema));
    }, [schema, data, errors]);
    //Validating data
    (0, react_1.useEffect)(() => {
        setErrors((0, validation_1.default)(data, schema));
    }, [data]);
    function handleSubmit(e) {
        e.preventDefault();
        console.error({ errors });
        onSubmit(data);
    }
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        elements,
        react_1.default.createElement("button", null, "submit")));
};
exports.FormBuilder = FormBuilder;
const UIGenerator = (state, errors, schema) => {
    const [data, setData] = state;
    const elements = schema.fields.map((field) => (react_1.default.createElement("div", { id: field.name, key: field.name },
        field.label && react_1.default.createElement("label", { id: `${field.name}-label` }, field.label),
        react_1.default.createElement("div", null, field.render()),
        field.validation && (react_1.default.createElement("label", { id: `${field.name}-error-label` }, errors[field.name])))));
    return elements;
};
exports.UIGenerator = UIGenerator;
exports.default = exports.FormBuilder;
