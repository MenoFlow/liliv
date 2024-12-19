import React, { useState } from "react";
import BookList from "./components/BookList";
import Filter from "./components/Filter";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import BookSwiper from "./components/BookSwiper";
import OrderPopup from "./components/OrderPopup";
// import "swiper/swiper-bundle.min.css";

const App = () => {
  const books = [
    {
      id: 1,
      genre: "Conte philosophique",
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      publicationDate: "1943",
      description: "Un conte poétique et philosophique qui aborde des thèmes profonds à travers les yeux d'un enfant.",
      price: 12.99,
      image: "petitPrince.jpg",
    },
    {
      id: 2,
      genre: "Roman dystopique",
      title: "1984",
      author: "George Orwell",
      publicationDate: "1949",
      description: "Un roman décrivant une société totalitaire sous la surveillance constante du 'Big Brother'.",
      price: 14.99,
      image: "1984.jpg",
    },
    {
      id: 3,
      genre: "Fantasy",
      title: "Harry Potter à l'école des sorciers",
      author: "J.K. Rowling",
      publicationDate: "1997",
      description: "Le début des aventures de Harry Potter, un jeune sorcier découvrant le monde magique.",
      price: 16.99,
      image: "harryPotter.jpg",
    },
    {
      id: 4,
      genre: "Roman historique",
      title: "Les Misérables",
      author: "Victor Hugo",
      publicationDate: "1862",
      description: "Une fresque historique et sociale de la France du XIXe siècle, centrée sur la rédemption de Jean Valjean.",
      price: 18.99,
      image: "les_miserables.jpg",
    },
    {
      id: 5,
      genre: "Roman d'amour",
      title: "Orgueil et Préjugés",
      author: "Jane Austen",
      publicationDate: "1813",
      description: "Une critique sociale des mœurs anglaises du début du XIXe siècle, centrée sur l'histoire d'amour entre Elizabeth Bennet et Mr. Darcy.",
      price: 13.99,
      image: "orgueil.jpg",
    },
    {
      id: 6,
      genre: "Fantasy épique",
      title: "Le Seigneur des Anneaux : La Communauté de l'Anneau",
      author: "J.R.R. Tolkien",
      publicationDate: "1954",
      description: "Le premier tome de l'épopée fantastique où Frodon entame sa quête pour détruire l'Anneau Unique.",
      price: 19.99,
      image: "seigneurDesAnneaux.jpg",
    },
    {
      id: 7,
      genre: "Roman existentialiste",
      title: "L'Étranger",
      author: "Albert Camus",
      publicationDate: "1942",
      description: "Un roman explorant l'absurdité de la condition humaine à travers les yeux de Meursault.",
      price: 11.99,
      image: "Letranger.jpg",
    },
    // // {
    // //   id: 8,
    // //   genre: "Roman d'aventure",
    // //   title: "Don Quichotte",
    // //   author: "Miguel de Cervantes",
    // //   publicationDate: "1605",
    // //   description: "Les aventures du chevalier errant Don Quichotte et de son fidèle écuyer Sancho Panza.",
    // //   price: 17.99,
    // //   image: "https://example.com/don_quichotte.jpg",
    // // },
  ];
  

  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleFilter = (criteria) => {
    if (criteria === "genre") {
      setFilteredBooks([...books].sort((a, b) => a.genre.localeCompare(b.genre)));
    } else if (criteria === "price") {
      setFilteredBooks([...books].sort((a, b) => a.price - b.price));
    } else if (criteria === "date") {
      setFilteredBooks([...books].sort((a, b) => new Date(a.publicationDate) - new Date(b.publicationDate)));
    } else {
      console.log(criteria)
      console.log(books[0].title)
      setFilteredBooks([...books].filter((item)=>item.title.toLowerCase().toString().includes(criteria.toString().toLowerCase())));
    }
    
  };

  return (
   <div className="app">
      <div className="app-content">
      <div className="background-container">
        <h1><i className="bi bi-book"></i><br />Librairie de Poussinette</h1>
          <div className="icon-background">
            <span className="icon">📚</span>
            <span className="icon">🌟</span>
            <span className="icon">🎨</span>
            <span className="icon">💻</span>
            <span className="icon">📖</span>
            <span className="icon">🎵</span>
          </div>
        </div>
        <Filter onFilter={handleFilter} />
        <BookSwiper books={filteredBooks} />
      </div>
      

      {/* Footer */}
      <footer className ="footer">
        <p>© {new Date().getFullYear()}, Hermenio. Tous droits réservés.</p>
        <div className="social-icons">
          <a href="https://web.facebook.com/hermenioh.andriantsuh/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </footer>
      
    </div>
  );


};

export default App;
