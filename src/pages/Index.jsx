import React, { useEffect, useState } from "react";
import { Article } from "../components/Article/Article";
import ArticleContent from "../components/Article/ArticleContent.json";

export const Index = () => {

    console.log(ArticleContent)
  return (
    <>
      <div className="index-wrapper">
        <h1>Hello World</h1>
        <section className="articles">
          {ArticleContent.articles.map((content, index) => {
            return (
                <Article content={content} key={index} />
            );
          })}
        </section>
      </div>
    </>
  );
};
