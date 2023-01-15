import styles from "@/styles/Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top_section}>
          <h1 className={styles.brand_name}>Josiel</h1>
        </div>
        <div className={styles.bottom_section}>
          <h2 className={styles.sub_title}>
            // Software Engineer && Full Stack Developer
          </h2>
        </div>
      </div>
    </>
  );
}
