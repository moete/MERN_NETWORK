import React, { useEffect, useState } from "react";
import Axios from "axios";
import NewsItem from "./NewsItem";

const NewsCard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-04-05&sortBy=publishedAt&apiKey=d8e51297839b4130b85c938e253e9239"
      );
      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  });
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <a href="alltopics" className="text-dark">
          <h6 className="title">
            Lastes News From
            <span style={{ color: "#2db96f" }}> TechCrunch</span>
          </h6>
        </a>
      </div>

      <ol className="widget w-playlist">
        {articles.map(
          ({ title, author, publishedAt, description, url, urlToImage }) => (
            <NewsItem
              title={title}
              author={author}
              publishedAt={publishedAt}
              description={description}
              url={url}
              urlToImage={urlToImage}
            />
          )
        )}
      </ol>
    </div>
  );
};

export default NewsCard;
