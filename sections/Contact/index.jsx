import styles from "@/styles/Contact.module.css";
import emailjs from "@emailjs/browser";

export default function Hero() {
  async function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const data = {
      your_name: name,
      your_email: email,
      message: message,
    };

    const response = await emailjs.sendForm(
      `${process.env.YOUR_SERVICE_ID}`,
      `${process.env.YOUR_TEMPLATE_ID}`,
      event.target,
      `${process.env.YOUR_PUBLIC_KEY}`
    );
  }

  return (
    <>
      <div className={styles.container} id="contact">
        <div className={styles.top_section}>
          <h1>Send me a Message!</h1>
        </div>
        <form className={styles.bottom_section} onSubmit={handleSubmit}>
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
