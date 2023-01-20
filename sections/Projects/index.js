import styles from "@/styles/Projects.module.css";
import ProjectCard from "@/components/ProjectCard";
import { DiPython } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top_section}></div>
        <div className={styles.bottom_section}>
          <ProjectCard>
            <DiPython style={{ width: "30px", height: "30px" }} />
            <SiCplusplus style={{ width: "30px", height: "30px" }} />
          </ProjectCard>
        </div>
      </div>
    </>
  );
}
