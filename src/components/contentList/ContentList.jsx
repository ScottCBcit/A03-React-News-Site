import React, { useState, useEffect } from 'react'
import styles from './ContentList.module.css'
import { Link } from 'react-router-dom'
import articles from './contentList.json'
function ContentList() {
  const [contentLists, setContentLists] = useState([articles])
  useEffect(() => {
    setContentLists(articles.articles);
  }, []);
  return (
    <section className={styles.contentList__wrapper}>
      <div className={styles.news__section}>
        <h1>News Sections</h1>
        <span className="material-symbols-outlined">
          feed
        </span>
      </div>
      <div className={styles.contentList__subWrapper}>
        {contentLists.map((contentList, idx) => (
          <div className={styles.contentList__container} key={idx}>
            <Link to={''}>
              <img src={contentList.image} alt={contentList.title} />
              <h2>{contentList.title}</h2>
              <h3>{contentList.author}</h3>
              <p>{contentList.createdAt}
                <span>|</span>
                <span className="material-symbols-outlined chat">
                  chat
                </span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>

  );
}

export default ContentList 
