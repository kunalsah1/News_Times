import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  document.title = ` ${capitalizeFirstLetter(props.category)} - News Times`


  const updateNews = async () => {
    props.updateProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKe&apiKey=3248c5662e30444bb60bd0985a65052c&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.updateProgress(100)
  }

  useEffect(() => {
    updateNews()
    // eslint-disable-next-line
  }, [])


  const handlePreviousPage = async () => {
    setPage(page - 1)
    updateNews()
  }


  const handleNextPage = async () => {
    setPage(page + 1)
    updateNews()
  };


  return (
    <div className="container my-3">
      <h2 className="heading">News Times - Top Headlines of {capitalizeFirstLetter(props.category)} </h2>
      {loading && <Spinner />}
      <div className="row">
        {!loading &&
          articles.map((article) => {
            return (
              <div className="col-md-3" key={article.url}>
                <NewsItems
                  title={article.title.slice(0, 30)}
                  description={
                    article.description
                      ? article.description.slice(0, 71)
                      : ""
                  }
                  img={article.urlToImage}
                  newsUrl={article.url}
                  author={article.author ? article.author : "unknown"}
                  date={article.publishedAt}
                />
              </div>
            );
          })}
      </div>
      <div className="btn-container d-flex justify-content-between ">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark "
          onClick={handlePreviousPage}
        >
          &#8592; Prev
        </button>
        <button
          disabled={
            page + 1 >
            Math.ceil(totalResults / props.pageSize)
          }
          type="button"
          className="btn btn-dark"
          onClick={handleNextPage}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );

}



News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};


News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};


export default News;
