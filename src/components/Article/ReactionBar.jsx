import React, { useState } from "react";
import styles from "./ReactionBar.module.css";

const reactions = [
  { type: "like", label: "👍" },
  { type: "love", label: "❤️" },
  { type: "star", label: "⭐" },
  { type: "save", label: "🔖" },
];

export default function ReactionBar() {
  const [counts, setCounts] = useState({ like: 24, love: 18, star: 12, save: 8 });

  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  const handleReaction = (type) => {
    setCounts((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <div className={styles.reactionBar}>
      {reactions.map((r) => (
        <div key={r.type} className={styles.reactionItem} onClick={() => handleReaction(r.type)}>
          <span>{r.label} {counts[r.type]}</span>
          <div className={styles.percentage}>
            {((counts[r.type] / total) * 100).toFixed(0)}%
          </div>
        </div>
      ))}
    </div>
  );
}
