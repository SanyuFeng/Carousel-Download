import React, { useState } from 'react';

const Carousel = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? pages.length - 1 : prevPage - 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === pages.length - 1 ? 0 : prevPage + 1));
  };

  return (
    <div className="relative">
      <div className="carousel-container flex justify-center items-center">
        <button
          onClick={handlePrevious}
          className="absolute left-0 bg-gray-500 text-white py-2 px-4 rounded m-2"
        >
          Previous《
        </button>
        <div className="carousel-page flex justify-center items-center min-w-full">
          {pages[currentPage]}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 bg-gray-500 text-white py-2 px-4 rounded m-2"
        >
          》Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
