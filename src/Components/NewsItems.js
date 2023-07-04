import React from "react";

const NewsItems = (props) => {

  const { title, description, img, newsUrl, author, date } = props;
  return (
    <>
      <div className="my-3" style={{ position: 'relative', left: '30px' }}>
        <div className="card" style={{ width: "18rem", height: "100%" }}>

          <img src={img} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-dark btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );

}

export default NewsItems;
