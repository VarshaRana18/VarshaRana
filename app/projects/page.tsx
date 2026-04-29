// page.tsx
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <section className={styles.blogsContainer}>
      {/* Decorative floating orbs */}
      <div className={`${styles.orb} ${styles.orb1}`}></div>
      <div className={`${styles.orb} ${styles.orb2}`}></div>

      <div className="flex flex-col items-center justify-center">
        <div className={styles.crystalCard}>
          <h1 className={styles.glowText}>Yoga Asana Alignment Tracker</h1>
          <p>
            Many a times we don't know if we are pushing ourselves enough or if
            we are doing the asanas correctly. This project is a tracker that
            uses pose estimation to analyze your yoga poses and provide feedback
            on your alignment and form.
          </p>
          <button className={styles.crystalBtn}>Visit Site</button>
        </div>

        <div className={styles.crystalCard}>
          <h1 className={styles.glowText}>
            AMS Computer Services and Repairing
          </h1>
          <p>
            An E-commerce website for buying tech items. Along withh it, you can
            request a custom build PC and we will dliver it to you. You can also
            request for repair of your PC and we will do it for you.
          </p>
          <button className={styles.crystalBtn}>
            <a href="https://ams-react.vercel.app/" target="_blank">
              Visit Site
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
