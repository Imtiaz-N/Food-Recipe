import styles from "./InnerCont.module.css";

export default function InnerCont({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
