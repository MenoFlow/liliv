import React from "react";
import "./../styles/BookDetailsPopup.css";

const BookDetailsPopup = ({ book, onClose }) => {
  return (
    <div className="details-popup">
      <div className="popup-content">
        <button className="btn-close" onClick={onClose}></button>
        
        <h4>
          <span style={{fontWeight:"bold"}}><i className="bi bi-book"></i> {book.title}</span>
        </h4>
        <div id="textToLeft">
          <p>
            <span style={{fontWeight:"bold"}}><i className="bi bi-person"></i> Auteur:</span> {book.author}
          </p>
          <p className="">
            <span style={{fontWeight:"bold"}}><i className="bi bi-calendar"></i> Date de publication:</span> {book.publicationDate}
          </p>
          <p className="">
            <span style={{fontWeight:"bold"}}><i className="bi bi-bookshelf"></i> Genre:</span> {book.genre}
          </p>
          <p>
            <span style={{fontWeight:"bold"}}><i className="bi bi-info-circle"></i> Description:</span> {book.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPopup;
