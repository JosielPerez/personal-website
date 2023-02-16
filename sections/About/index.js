import styles from "@/styles/About.module.css";
export default function About() {
  return (
    <>
      <div className={styles.container} id="about">
        <div className={styles.top_section}>
          <div className={styles.content}>
            <div className={styles.left_content}>
              <h1 style={{ color: "white" }}>ABOUT</h1>
            </div>
            <div className={styles.right_content}>
              <img
                className={styles.profile_image}
                src="/profile.jpg"
                alt="personal profile"
              />
            </div>
          </div>
        </div>
        <div className={styles.bottom_section}>
          <div className={styles.main_content}>
            <div className={styles.bar}> </div>
            <p className={styles.text}>
              Hello, I’m Josiel, a junior at Hunter College pursuing a major in
              computer science. Originally a premed student with hopes of
              becoming a general surgeon, my path gradually shifted towards
              code. The greatest contributor to this change was being surrounded
              by friends in the field as I’d always hear about their fascinating
              projects and the intricate technology they used. Overtime, my
              simple curiosity and fascination evolved into deep immersion of
              the world of programming. With code, there is always something new
              for me to explore and be challenged by. At that point there was no
              doubt I wanted to go after a career in computer science and
              fulfill my dream.
            </p>
            <p className={styles.text}>
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className={styles.skill_list}>
              <li>Python</li>
              <li>Flask</li>
              <li>C++</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
