import React, { useState } from "react";
import "./../styles/Filter.css";

const Filter = ({ onFilter }) => {
  const [whatFilter, setWhatFilter] = useState("genre");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwitch = (newFilter) => {
    setIsAnimating(true); // Début de l'animation
    setTimeout(() => {
      setWhatFilter(newFilter); // Change le contenu après l'animation
      setIsAnimating(false); // Fin de l'animation
    }, 300); // Durée de l'animation
  };

  return (
    <div className="filter">
      <div className="filter-content">
        <div className={`content ${isAnimating ? "animate-out" : "animate-in"}`}>
          {whatFilter === "genre" ? (
            <div className="content-inner">
              <button className="btn">Trier par :</button>
              <button className="btn-filter" onClick={() => onFilter("genre")}>
                GENRE
              </button>
              <button className="btn-filter" onClick={() => onFilter("price")}>
                PRIX
              </button>
              <button className="btn-filter" onClick={() => onFilter("date")}>
                DATE
              </button>
              <button
                className="btn"
                style={{ fontSize: "20px" }}
                onClick={() => handleSwitch("search")}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          ) : (
            <div className="content-inner">
              <input
                type="text"
                className="input-field input"
                placeholder="Veuillez entrer ici le titre"
                onChange={(e) => {
                  onFilter(e.target.value);
                }}
              />
              <button
                className="btn"
                style={{ fontSize: "20px" }}
                onClick={() => handleSwitch("genre")}
              >
                <i className="bi bi-list"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
