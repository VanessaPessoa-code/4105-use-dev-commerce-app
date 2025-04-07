import { InputHTMLAttributes } from "react";
import Styles from "./Input.module.css";

export type InputProps = {
  variant?: "primary" | "secondary";
} & InputHTMLAttributes<HTMLInputElement>; // Permite passar outras props de input  

const Input = ({
  variant = "primary",
  ...props
}: InputProps) => {
  return (
      <input
        className={Styles[variant]}
        {...props}
      />
  );
};

export default Input;
