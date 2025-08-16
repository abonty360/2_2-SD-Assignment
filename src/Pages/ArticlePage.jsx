import Article from "../components/Article/Article";
import CommentList from "../components/Article/CommentList";
import styles from "./ArticlePage.module.css";


const ArticlePage = () => {

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumb}>Home → Articles</div>
      <Article />
      <CommentList />
    </div>
  );
};

export default ArticlePage;
