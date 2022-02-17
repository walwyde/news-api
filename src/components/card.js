import React from "react";

const Card = ({ author, content, image, publishedAt, url }) => {
  return (
    <div className="tc bg-dark dib br4 ma3 bw3 shadow-S">
      <img className="grow" src={image} alt={image} />
      <h1>{author}</h1>
      <div className="tj">
      <p>{content}</p>
      </div>
      <p>{publishedAt}</p>
      <a  className="link dim near-black" href={url}>Read more</a>
    </div>
  );
};

export default Card;
