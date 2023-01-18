import styles from "./styles.module.css";

function ProjectCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <img
          className={styles.project_img}
          src="/project1.jpg"
          alt="project 1"
        />
      </div>
      <div className={styles.right_content}>
        <h2>Project Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia.
        </p>
      </div>
    </div>
  );
}
export default ProjectCard;
