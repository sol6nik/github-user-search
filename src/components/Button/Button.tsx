import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
