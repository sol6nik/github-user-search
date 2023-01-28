import styles from "./TheHeader.module.scss";
import { ThemeSwitcher } from "components/ThemeSwitcher";

export const TheHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>devfinder</div>
      <ThemeSwitcher />
    </header>
  );
};
