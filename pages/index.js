import Head from "next/head";
import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Josiel</title>
        <meta name="description" content="Josiel's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#242626" />
        <link rel="icon" href="/whitelogo.png" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Head>
      <main>
        <TopNav />
        <BottomNav />
        <div className={styles.scroll_container}>
          <div className={styles.scroll_area}>
            <Hero />
          </div>
          <div className={styles.scroll_area}>
            <About />
          </div>
          <div className={styles.scroll_area}>
            <Projects />
          </div>
          <div className={styles.scroll_area}>
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
}
