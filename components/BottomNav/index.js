import styles from "./styles.module.css";
import { BiSpreadsheet } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";

function BottomNav() {
  return (
    <div className={styles.container}>
      <div className={styles.bar}></div>
      <a
        href="https://github.com/JosielPerez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineGithub style={{ width: "30px", height: "30px" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/josiel-perez/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiLinkedin style={{ width: "30px", height: "30px" }} />
      </a>
      <a href="/resume" target="_blank" rel="noopener noreferrer">
        <BiSpreadsheet style={{ width: "30px", height: "30px" }} />
      </a>
    </div>
  );
}
export default BottomNav;
