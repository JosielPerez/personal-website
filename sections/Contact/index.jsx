import styles from "@/styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Hero() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs

      .sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className={styles.container} id="contact">
        <div className={styles.top_section}>
          <h1>Send me a Message!</h1>
        </div>
        <form ref={form} className={styles.bottom_section} onSubmit={sendEmail}>
          <div className={styles.top_row}>
            <div className={styles.column}>
              <label className={styles.name}>Your Name</label>
              <input
                name="name"
                placeholder="Enter Your Name"
                className={styles.input}
              ></input>
            </div>
            <div className={styles.column}>
              <label className={styles.name}>Your Email</label>
              <input
                name="email"
                placeholder="Enter Your Email"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.bottom_row}>
            <div className={styles.column} style={{ width: "100%" }}>
              <label className={styles.name}>Your Message</label>
              <input
                name="message"
                placeholder="Enter Your Message"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.button_row}>
            <input type="submit" value="Submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </>
  );
}
