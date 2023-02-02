import styles from "@/styles/Projects.module.css";
import ProjectCard from "@/components/ProjectCard";
import { DiPython } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import Carousel from "@/components/Carousel";

export default function Projects() {
  return (
    <>
      <meta
        name="apple-mobile-web-app-app-status-bar-style"
        content="black-translucent"
      />
      <div className={styles.container} id="projects">
        <div className={styles.top_section}></div>
        <div className={styles.bottom_section}>
          <Carousel>
            <ProjectCard link="https://github.com/JosielPerez/personal-website">
              <DiPython style={{ width: "30px", height: "30px" }} />
              <SiCplusplus style={{ width: "30px", height: "30px" }} />
            </ProjectCard>
            <ProjectCard link="https://github.com/JosielPerez/personal-website">
              <DiPython style={{ width: "30px", height: "30px" }} />
              <SiCplusplus style={{ width: "30px", height: "30px" }} />
            </ProjectCard>
            <ProjectCard link="https://github.com/JosielPerez/personal-website">
              <DiPython style={{ width: "30px", height: "30px" }} />
              <SiCplusplus style={{ width: "30px", height: "30px" }} />
            </ProjectCard>
            <ProjectCard link="https://github.com/JosielPerez/personal-website">
              <DiPython style={{ width: "30px", height: "30px" }} />
              <SiCplusplus style={{ width: "30px", height: "30px" }} />
            </ProjectCard>
          </Carousel>
        </div>
      </div>
    </>
  );
}
