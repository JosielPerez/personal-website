import styles from "./styles.module.css";
import { CgProfile } from "react-icons/cg";
import { HiOutlineFolder } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";

function TopNav() {
  return (
    <div className={styles.container}>
      <div className={styles.bar}></div>
      <a href="#hero">
        <img
          className={styles.logo_image}
          src="/whitelogo.png"
          alt="personal logo"
        />
      </a>
      <a href="#about">
        <CgProfile style={{ width: "30px", height: "30px" }} />
      </a>
      <a href="#projects">
        <HiOutlineFolder style={{ width: "30px", height: "30px" }} />
      </a>
      <a href="#contact">
        <HiOutlineMail style={{ width: "30px", height: "30px" }} />
      </a>
    </div>
  );
}
export default TopNav;
