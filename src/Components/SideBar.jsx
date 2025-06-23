import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyrith}>
          &copy; Copyright {new Date().getFullYear()} by Witin Vision
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
