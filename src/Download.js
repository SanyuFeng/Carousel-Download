import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import JSZip from 'jszip';

const downloadAllPagesAsPDF = async () => {
  const pages = document.querySelectorAll('.carousel-page');
  const pdf = new jsPDF();
  let firstPage = true;

  for (let page of pages) {
    const canvas = await html2canvas(page);
    const imgData = canvas.toDataURL('image/png');
    if (!firstPage) pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, 0);
    firstPage = false;
  }

  pdf.save('carousel_pages.pdf');
};

const downloadAllPagesAsZIP = async () => {
  const pages = document.querySelectorAll('.carousel-page');
  const zip = new JSZip();
  let count = 0;

  for (let page of pages) {
    const canvas = await html2canvas(page);
    const imgData = canvas.toDataURL('image/png');
    const imgBlob = await fetch(imgData).then(res => res.blob());
    zip.file(`page-${count}.png`, imgBlob);
    count++;
  }

  const content = await zip.generateAsync({ type: 'blob' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(content);
  link.download = 'carousel_pages.zip';
  link.click();
};

export { downloadAllPagesAsPDF, downloadAllPagesAsZIP };
