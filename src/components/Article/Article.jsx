import React from "react";
import styles from "./article.module.css";
import ArticleContent from "./ArticleContent.json";
import { Link } from "react-router-dom";

function Article() {



  return (
    <section className={styles.articlesSection}>
      {ArticleContent.articles.map((content, idx) => (
        // <div key={idx}>
          <Link key={idx} className={styles.container}  to={'#'}>
          <img
            src={`./article/${content.image}`}
            alt={content.alt}
            className={styles.articleImage}
          />
          
          <h3  className={styles.title}>{content.title}</h3>
          
          <div className={styles.authorAndDate}>
            <p>{content.author}</p>
            <time>{content.date}</time>
          </div>
          <div  className={styles.article}>
              <p>{content.content}</p>
              <i className={styles.arrow}></i>
          </div>
          </Link>
            
        // </div>
      ))}
    </section>
  );
}
export default Article;