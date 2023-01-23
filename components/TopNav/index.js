import styles from "./styles.module.css";
import { CgProfile } from "react-icons/cg";
import { BsFolderFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";

function TopNav() {
  return (
    <div className={styles.container}>
      <div className={styles.bar}></div>
      <img
        className={styles.logo_image}
        src="/whitelogo.png"
        alt="personal logo"
      />
      <CgProfile style={{ width: "30px", height: "30px" }} />
      <BsFolderFill style={{ width: "30px", height: "30px" }} />
      <BsTelephoneFill style={{ width: "30px", height: "30px" }} />
    </div>
  );
}
export default TopNav;
