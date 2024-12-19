  import React from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation, Pagination } from "swiper/modules"; // Modules nécessaires
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "./../styles/BookSwiper.css";
  import BookCard from "./BookCard";

  const BookSwiper = ({ books }) => {
    return (
      <div className="book-swiper">
        <Swiper
          // spaceBetween={10} // Espacement entre les slides
          slidesPerView={4} // Nombre maximum de slides visibles par défaut
          navigation // Activer la navigation (flèches)
          pagination={{ clickable: true }} // Activer la pagination
          modules={[Navigation, Pagination]} // Ajouter les modules nécessaires
          breakpoints={{
            // Paramètres responsive
            320: { slidesPerView: 1, spaceBetween: 10 }, // Écran très petit (mobile)
            640: { slidesPerView: 2, spaceBetween: 15 }, // Écran petit (tablette)
            1024: { slidesPerView: 3, spaceBetween: 20 }, // Écran moyen (desktop)
            1440: { slidesPerView: 4, spaceBetween: 25 }, // Écran large
          }}
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  export default BookSwiper;
