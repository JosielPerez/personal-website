import styles from "./styles.module.css";

function ProjectCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <img className={styles.project_img} src={props.img} alt={props.alt} />
      </div>
      <div className={styles.right_content}>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.text}>{props.text}</p>
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
