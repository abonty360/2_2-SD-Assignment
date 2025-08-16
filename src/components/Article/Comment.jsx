import React, { useState } from "react";
import styles from "./Comment.module.css";

const reactions = [
  { type: "like", label: "❤️" },
  { type: "insight", label: "👍" },
  { type: "disagree", label: "👎" },
];

export default function Comment({ author, text, time }) {
  const [activeReaction, setActiveReaction] = useState(null);

  const handleReaction = (type) => {
    setActiveReaction(type === activeReaction ? null : type);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>{author[0]}</div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.author}>{author}</span>
          <span className={styles.time}>{time}</span>
        </div>
        <p>{text}</p>
        <div className={styles.commentReactions}>
          {reactions.map((r) => (
            <span
              key={r.type}
              className={`${styles.reaction} ${activeReaction === r.type ? styles.active : ""}`}
              onClick={() => handleReaction(r.type)}
            >
              {r.label}
            </span>
          ))}
        </div> 
        <div className={styles.commentActions}>
          <button className={styles.actionBtn}>Reply</button>
          <button className={styles.actionBtn}>Report</button>
        </div>
      </div>
    </div>
  );
}
