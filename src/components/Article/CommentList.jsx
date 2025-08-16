import React, { useState } from "react";
import Comment from "./Comment";
import Pagination from "../Pagination";
import styles from "./CommentList.module.css";

const CommentList = () => {
  const [comments, setComments] = useState([
    { id: 1, author: "Alice", time: "2h ago", text: "Great article!" },
    { id: 2, author: "Bob", time: "1h ago", text: "Thanks for sharing." },
    { author: "Charlie", text: "Can't wait for 2024 features." },
    { author: "Dana", text: "Thanks for sharing." },
    { author: "Eve", text: "Awesome insights!" },
    { author: "Frank", text: "Interesting perspective." },
  ]);

  const [newComment, setNewComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

   const commentsPerPage = 4;
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const updatedComments = [
      ...comments,
      {
        id: comments.length + 1,
        author: "You",
        time: "Just now",
        text: newComment,
      },
    ];
    setComments(updatedComments);
    setNewComment("");

    // Automatically go to the last page to show the new comment
    setCurrentPage(Math.ceil(updatedComments.length / commentsPerPage));
  };

  const indexOfLast = currentPage * commentsPerPage;
  const indexOfFirst = indexOfLast - commentsPerPage;
  const currentComments = comments.slice(indexOfFirst, indexOfLast);

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
        {currentComments.map((c) => (
          <Comment key={c.id} {...c} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CommentList;
