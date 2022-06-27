/// <reference types="react" />
import { ISchema } from "./schema";
interface IProps {
    onSubmit: (data: any) => void;
    schema: any;
}
export declare const FormBuilder: ({ onSubmit, schema }: IProps) => JSX.Element;
export declare const UIGenerator: (state: any, errors: any, schema: ISchema) => JSX.Element[];
export default FormBuilder;
