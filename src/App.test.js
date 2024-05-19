import React from 'react';
import Carousel from './Carousel';
import { downloadAllPagesAsPDF, downloadAllPagesAsZIP } from './Download';
import './index.css'; // Ensure Tailwind CSS is included

const pages = [
  <div className="bg-gray-200 p-5 flex justify-center items-center">
    <img src={`${process.env.PUBLIC_URL}/images/image1.jpg`} alt="Page 1" className="max-w-full h-auto" />
  </div>,
  <div className="bg-gray-200 p-5 flex justify-center items-center">
    <img src={`${process.env.PUBLIC_URL}/images/image2.jpg`} alt="Page 2" className="max-w-full h-auto" />
  </div>,
  <div className="bg-gray-200 p-5 flex justify-center items-center">
    <img src={`${process.env.PUBLIC_URL}/images/image3.jpg`} alt="Page 3" className="max-w-full h-auto" />
  </div>,
];

const App = () => {
  return (
    <div className="App">
      <Carousel pages={pages} />
      <div className="flex justify-center mt-4">
        <button onClick={downloadAllPagesAsPDF} className="bg-blue-500 text-white py-2 px-4 rounded m-2">
          Download as PDF
        </button>
        <button onClick={downloadAllPagesAsZIP} className="bg-green-500 text-white py-2 px-4 rounded m-2">
          Download as ZIP
        </button>
      </div>
    </div>
  );
};

export default App;
