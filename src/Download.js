import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// Function to download all pages as PDF
export const downloadAllPagesAsPDF = async (pages) => {
  const doc = new jsPDF();
  
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    await html2canvas(page, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 210; // A4 width in mm
      const pageHeight = (canvas.height * imgWidth) / canvas.width;
      
      if (i > 0) doc.addPage();
      doc.addImage(imgData, 'PNG', 0, 0, imgWidth, pageHeight);
    });
  }

  doc.save('carousel_pages.pdf');
};

// Function to download all pages as ZIP
export const downloadAllPagesAsZIP = async (pages) => {
  const zip = new JSZip();
  
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    await html2canvas(page, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const byteString = atob(imgData.split(',')[1]);
      const mimeString = imgData.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let j = 0; j < byteString.length; j++) {
        ia[j] = byteString.charCodeAt(j);
      }
      const blob = new Blob([ab], { type: mimeString });
      zip.file(`page_${i + 1}.png`, blob);
    });
  }

  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, 'carousel_pages.zip');
  });
};
