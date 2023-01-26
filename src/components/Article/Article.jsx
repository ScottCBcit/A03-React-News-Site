import React from "react";
import styles from "./article.module.css";
export const Article = ({ content }) => {
  return (
    <div className={`${styles.container}`}>
      <img
        src={`./article/${content.image}`}
        alt={content.alt}
        className={`${styles.ArticleImage}`}
      />
      <h3 className={`${styles.Title}`}>{content.title}</h3>
      <div className={`${styles.author} ${styles.AuthorAndDate}`}>
        {content.author}
        <time className={`${styles.AuthorAndDate}`}>{content.date}</time>
      </div>
      <p className={`${styles.Article}`}>{content.content}</p>
    </div>
  );
};
