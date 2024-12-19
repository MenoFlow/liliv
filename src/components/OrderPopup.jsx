import React from "react";
import "./../styles/OrderPopup.css";

const OrderPopup = ({ book, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="btn-close" onClick={onClose}>
          
        </button>
        <h3>Commander le livre</h3>
        <p>
          Vous êtes sur le point de commander <strong>{book.title}</strong> pour{" "}
          <strong>{book.price} €</strong>.
        </p>
        <button className="btn btn-success">Confirmer la commande</button>
      </div>
    </div>
  );
};

export default OrderPopup;
