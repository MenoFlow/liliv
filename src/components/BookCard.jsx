import React, { useState } from "react";
import BookDetailsPopup from "./BookDetailsPopup";
import OrderPopup from "./OrderPopup";
import "./../styles/BookCard.css";

const BookCard = ({ book }) => {
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  return (
    <div className="book-card">
      <div className="book">
        <img src={book.image} alt={book.title} className="book-image mb-3" />
      </div>
      <div className="justify-content-end">
        <h3>{book.title}</h3>
        <p>Prix: {book.price} €</p>
        <div className="before-book-actions">
          <div className="book-actions">
              <button
              className="btn btn-primary"
              onClick={() => setShowDetailsPopup(!showDetailsPopup)}
              >
              Détails
              </button>
              <button
              className="btn btn-success"
              onClick={() => setShowOrderPopup(true)}
              >
              Commander
              </button>
          </div>
        </div>
      </div>

      {/* Petite fenêtre pour les détails */}
      {showDetailsPopup && <BookDetailsPopup book={book} onClose={() => setShowDetailsPopup(false)} />}

      {/* Popup pour commander */}
      {showOrderPopup && <OrderPopup book={book} onClose={() => setShowOrderPopup(false)} />}
    </div>
  );
};

export default BookCard;
