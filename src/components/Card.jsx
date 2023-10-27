import React from "react";
import "../styles/Card.css";
export const Card = ({ img, title, author, message }) => {
  return (
    <>
      <div className="card">
        <label className="avatar">
          <img src={img} />
        </label>
        <label className="info">
          <span className="info-1">{title}</span>
          <span className="info-2">{author}</span>
        </label>
        <div className="content-1">
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};
