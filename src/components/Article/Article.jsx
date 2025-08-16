import React from "react";
import { Link } from "react-router-dom";
import styles from "./Article.module.css";
import ReactionBar from "./ReactionBar";

export default function Article() {
  return (
    <div className={styles.article}>
      <span className={styles.tag}>IT</span>

      <h2 className={styles.title}>
        The Future of Software Development
      </h2>

      <div className={styles.meta}>
        <span className={styles.avatar}>AR</span>
        <p>
          By{" "}
          <Link to="/authors/abonty-rahman" className={styles.author}>
            Abonty Rahman
          </Link>{" "}
          • Published on August 17, 2025 
        </p>
      </div>
      <p className={styles.paragraph}>
        React continues to evolve at a rapid pace, and 2025 promises to bring
        some exciting new features and improvements that will reshape how we
        build modern applications.
      </p>


      <ReactionBar />
    </div>
  );
}
