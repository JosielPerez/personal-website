import styles from "./styles.module.css";

function ProjectCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <img
          className={styles.project_img}
          src="/project1.png"
          alt="project 1"
        />
      </div>
      <div className={styles.right_content}>
        <h2 className={styles.title}>Personal Website</h2>
        <p className={styles.text}>
          Developed a dynamic and user-friendly personal website that showcases
          my portfolio. Utilizing the latest web technologies like HTML, CSS,
          JavaScript and React, the website presents a professional platform for
          potential employers or clients to view and interact with my projects.
          The website provides an easy-to-use interface and an engaging user
          experience to showcase my skills and accomplishments in a modern and
          professional way
        </p>
        <div className={styles.skill_container}>{props.children}</div>
        <div className={styles.button_container}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className={styles.button}>Github Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
