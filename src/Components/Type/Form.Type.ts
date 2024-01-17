import { ReactNode } from "react"
import { FieldValue, SubmitHandler } from "react-hook-form";

export type TForm = {
   children: ReactNode;
   onSubmit: SubmitHandler<FieldValue>;
   double: boolean;
}