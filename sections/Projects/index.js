import styles from "@/styles/Projects.module.css";
import ProjectCard from "@/components/ProjectCard";

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top_section}></div>
        <div className={styles.bottom_section}>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}
