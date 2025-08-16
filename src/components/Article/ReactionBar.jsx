import React, { useState } from "react";
import styles from "./ReactionBar.module.css";

const reactions = [
  { type: "like", label: "👍" },
  { type: "love", label: "❤️" },
  { type: "angry", label: "😠" },
  { type: "sad", label: "🙁" },
];

export default function ReactionBar() {
  const [counts, setCounts] = useState({ like: 24, love: 18, angry: 12, sad: 8 });
  const [activeReaction, setActiveReaction] = useState(null);

  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  const handleReaction = (type) => {
    setCounts((prev) => {
      const updated = { ...prev };

      if (activeReaction === type) {
        updated[type] = Math.max(0, updated[type] - 1);
        setActiveReaction(null);
      } else {
        if (activeReaction) {
          updated[activeReaction] = Math.max(0, updated[activeReaction] - 1);
        }
        updated[type] = updated[type] + 1;
        setActiveReaction(type);
      }

      return updated;
    });
  };

  return (
    <div className={styles.reactionBar}>
      {reactions.map((r) => (
        <div
          key={r.type}
          className={`${styles.reactionItem} ${activeReaction === r.type ? styles.active : ""}`}
          onClick={() => handleReaction(r.type)}
        >
          <span>{r.label} {counts[r.type]}</span>
          <div className={styles.percentage}>
            {((counts[r.type] / total) * 100).toFixed(0)}%
          </div>
        </div>
      ))}
    </div>
  );
}
