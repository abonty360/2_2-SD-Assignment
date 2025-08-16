import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./AuthorPage.module.css";
import articles from "../data/articles";

const authors = {
    "abonty-rahman": {
        name: "Abonty Rahman",
        initials: "AR",
        role: "Software Engineer & Technical Writer",
        bio: "Focused on modern web development, React ecosystem, and sharing knowledge with the developer community.",
        stats: { articles: 12, followers: "1.5K", following: 230 },
        articleId: 1,
    },
};

export default function AuthorPage() {
    const { authorId } = useParams();
    const author = authors[authorId];

    if (!author) {
        return <p className={styles.notFound}>Author not found.</p>;
    }
const article = articles[author.articleId];

    return (
        <div className={styles.container}>
            <div className={styles.profileCard}>
                <div className={styles.avatar}>{author.initials}</div>
                <div className={styles.info}>
                    <h2 className={styles.name}>{author.name}</h2>
                    <p className={styles.role}>{author.role}</p>
                    <p className={styles.bio}>{author.bio}</p>

                    <div className={styles.stats}>
                        <div>
                            <strong>{author.stats.articles}</strong>
                            <span>Articles</span>
                        </div>
                        <div>
                            <strong>{author.stats.followers}</strong>
                            <span>Followers</span>
                        </div>
                        <div>
                            <strong>{author.stats.following}</strong>
                            <span>Following</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.articlesSection}>
        <h3 className={styles.sectionTitle}>Recent Article</h3>
        <div className={styles.articleCard}>
          <div className={styles.articleIcon}>⚛️</div>
          <div>
            <Link to={`/articles/${author.articleId}`} className={styles.articleTitle}>
              {article.title}
            </Link>
            <p className={styles.articleMeta}>
              {article.date} • by {article.author}
            </p>
            <p className={styles.articleExcerpt}>
              {article.content.slice(0, 120)}...
            </p>
          </div>
        </div>
      </div>
        </div>
    );
}
