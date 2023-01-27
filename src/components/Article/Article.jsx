import React from "react";
import styles from "./article.module.css";
import ArticleContent from "./ArticleContent.json";

function Article() {

  return (
    <section className={styles.articlesSection}>
      {ArticleContent.articles.map((content, idx) => (
        <div className={styles.container} key={idx}>
          <img
            src={`./article/${content.image}`}
            alt={content.alt}
            className={styles.articleImage}
          />
          <h3 className={styles.title}>{content.title}</h3>
          <div className={styles.authorAndDate}>
            {content.author}
            <time className={`${styles.authorAndDate}`}>{content.date}</time>
          </div>
            <p className={styles.article}>{content.content}</p>
        </div>
      ))}
    </section>
  );
}
export default Article;