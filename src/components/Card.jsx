import React from "react";

const Card = ({ title, description, imageUrl, url }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img
        src={imageUrl || "NO IMAGE PROVIDED"}
        className="card-img-top"
        alt={title || "No Description "}
      />
      <div className="card-body">
        <h5 className="card-title">{title || "NO Tittle"}</h5>
        <p className="card-text">{description || "no description"}</p>
        <a
          href={url || "#"}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
