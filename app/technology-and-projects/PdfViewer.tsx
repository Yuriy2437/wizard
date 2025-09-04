'use client';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PdfViewer() {
  return (
    <div style={{ width: '100%', minHeight: 400, background: '#fff' }}>
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
        <Viewer fileUrl='/Presentation_of_an_energy-efficient_technical_solution.pdf' />
      </Worker>
    </div>
  );
}
