import styles from "@/styles/Contact.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top_section}>
          <h1>Send me a Message!</h1>
        </div>
        <div className={styles.bottom_section}>
          <div className={styles.top_row}>
            <div className={styles.column}>
              <label className={styles.name}>Your Name</label>
              <input
                placeholder="Enter Your Name"
                className={styles.input}
              ></input>
            </div>
            <div className={styles.column}>
              <label className={styles.name}>Your Email</label>
              <input placeholder="Enter Your Email" className={styles.input} />
            </div>
          </div>
          <div className={styles.bottom_row}>
            <div className={styles.column} style={{ width: "100%" }}>
              <label className={styles.name}>Your Message</label>
              <input
                placeholder="Enter Your Message"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.button_row}>
            <button className={styles.submit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
