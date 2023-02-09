import styles from "@/styles/Projects.module.css";
import ProjectCard from "@/components/ProjectCard";
import { DiPython } from "react-icons/di";
import { SiCplusplus } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import Carousel from "@/components/Carousel";

export default function Projects() {
  return (
    <>
      <div className={styles.container} id="projects">
        <div className={styles.top_section}></div>
        <div className={styles.bottom_section}>
          <Carousel>
            <ProjectCard
              text="Developed a dynamic and user-friendly personal website that showcases
              my portfolio. Utilizing the latest web technologies like HTML, CSS,
              JavaScript and React, the website presents a professional platform for
              potential employers or clients to view and interact with my projects.
              The website provides an easy-to-use interface and an engaging user
              experience to showcase my skills and accomplishments in a modern and
              professional way"
              link="https://github.com/JosielPerez/personal-website"
            >
              <DiJavascript style={{ width: "30px", height: "30px" }} />
              <DiCss3 style={{ width: "30px", height: "30px" }} />
              <DiReact style={{ width: "30px", height: "30px" }} />
            </ProjectCard>
            <ProjectCard link="https://github.com/JosielPerez/nftfloortracker">
              <DiPython style={{ width: "30px", height: "30px" }} />
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
