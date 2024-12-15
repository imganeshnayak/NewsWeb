import React from "react";

const Card = ({ title, description, imageUrl, url }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img
        src={imageUrl || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
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
