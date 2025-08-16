import React, { useState } from "react";
import Article from "../components/Article/Article";
import CommentList from "../components/Article/CommentList";
import Pagination from "../components/Pagination";
import styles from "./ArticlePage.module.css";


const ArticlePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>Home → Articles</div>
      <Article />
      <CommentList />

      {/* Pagination at bottom */}
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ArticlePage;
