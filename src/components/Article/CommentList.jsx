import React, { useState } from "react";
import Comment from "./Comment";
import styles from "./CommentList.module.css";

const CommentList = () => {
  const [comments, setComments] = useState([
    { id: 1, author: "Alice", time: "2h ago", text: "Great article!" },
    { id: 2, author: "Bob", time: "1h ago", text: "Thanks for sharing." },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        author: "You",
        time: "Just now",
        text: newComment,
      },
    ]);
    setNewComment("");
  };

  return (
    <div className={styles.commentBox}>
      <h3 className={styles.header}>Comments ({comments.length})</h3>

      <div className={styles.addComment}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Post</button>
      </div>

      <div className={styles.commentList}>
        {comments.map((c) => (
          <Comment key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
