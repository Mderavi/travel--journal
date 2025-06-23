import { Outlet } from "react-router-dom"; //when you need one part of UI change with url address
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyrith}>
          &copy; Copyright {new Date().getFullYear()} by Witin Vision
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
