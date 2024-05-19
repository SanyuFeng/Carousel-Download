import React, { useRef } from 'react';
import Carousel from './Carousel';
import { downloadAllPagesAsPDF, downloadAllPagesAsZIP } from './Download';
import './index.css'; // Ensure Tailwind CSS is included

const pagesData = [
  { id: 1, src: `${process.env.PUBLIC_URL}/images/image1.jpg`, alt: "Page 1" },
  { id: 2, src: `${process.env.PUBLIC_URL}/images/image2.jpg`, alt: "Page 2" },
  { id: 3, src: `${process.env.PUBLIC_URL}/images/image3.jpg`, alt: "Page 3" },
];

const App = () => {
  const pageRefs = useRef([]);

  return (
    <div className="App">
      <Carousel pages={pagesData.map((page, index) => (
        <div
          key={page.id}
          ref={(el) => (pageRefs.current[index] = el)}
          className="bg-gray-200 p-5 flex justify-center items-center"
        >
          <img src={page.src} alt={page.alt} className="max-w-full h-auto" />
        </div>
      ))} />
      <div className="flex justify-center mt-4">
        <button
          onClick={() => downloadAllPagesAsPDF(pageRefs.current)}
          className="bg-blue-500 text-white py-2 px-4 rounded m-2"
        >
          Download as PDF
        </button>
        <button
          onClick={() => downloadAllPagesAsZIP(pageRefs.current)}
          className="bg-green-500 text-white py-2 px-4 rounded m-2"
        >
          Download as ZIP
        </button>
      </div>
    </div>
  );
};

export default App;
