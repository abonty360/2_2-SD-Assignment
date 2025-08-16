import React from "react";
import { Link } from "react-router-dom";
import styles from "./Article.module.css";
import ReactionBar from "./ReactionBar";

export default function Article({ title, author, authorId, date, content }) {

  const initials = author
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className={styles.article}>
      <span className={styles.tag}>IT</span>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.meta}>
        <span className={styles.avatar}>{initials}</span>
        <p>
          By{" "}
          <Link to={`/authors/${authorId}`} className={styles.author}>
            {author}
          </Link>{" "}
          • Published on {date}
        </p>
      </div>

      <p className={styles.paragraph}>{content}</p>

      <ReactionBar />
    </div>
  );
}
