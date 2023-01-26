import React, { useEffect, useState } from "react";
import ContentList from "../components/contentList/ContentList";
import articles from "../components/contentList/contentList.json";
import styles from "../components/contentList/ContentList.module.css"
export const Index = () => {
    const [contentLists, setContentLists] = useState([articles])
    useEffect(() => {
        setContentLists(articles.articles);
    }, []);
    return (
        <>
            <div className="index-wrapper">
                <h1>Hello World</h1>
                <section className={styles.contentList__wrapper}>
                    <h1>News Sections</h1>
                    <div className={styles.contentList__subWrapper}>
                        {contentLists.map((contentList, idx) => (
                            <ContentList
                                key={idx}
                                contentList={contentList}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}

