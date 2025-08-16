import Article from "../components/Article/Article";
import CommentList from "../components/Article/CommentList";
import styles from "./ArticlePage.module.css";
import { useParams } from "react-router-dom";
import articles from "../data/articles"; 


const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles[articleId] || articles[1]; 

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumb}>Home → Articles → {article.title}</div>
      
      <Article
        title={article.title}
        author={article.author}
        authorId={article.authorId}
        date={article.date}
        content={article.content}
      />

      <CommentList articleId={articleId} />
    </div>
  );
};

export default ArticlePage;
