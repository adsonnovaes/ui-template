import { FormEventHandler } from "react";

export interface LoginFormProps {
  className?: string;
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}