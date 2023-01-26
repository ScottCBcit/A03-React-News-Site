import React, { useState, useEffect } from 'react'
import styles from './ContentList.module.css'
import { Link } from 'react-router-dom'

function ContentList({ contentList }) {

  return (
    <div className={styles.contentList__container}>
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
  );
}

export default ContentList 
