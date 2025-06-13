import React from "react";
import { useReactToPrint } from "react-to-print";

function ResumePreview({ data, suggestion }) {
  const printRef = React.useRef();

  const handlePrint = useReactToPrint({ content: () => printRef.current });

  return (
    <div className="p-4">
      <div ref={printRef} className="border p-4 shadow bg-white">
        <h1 className="text-xl font-bold">{data.name}</h1>
        <p>{data.email} | {data.phone}</p>
        <p><strong>Summary:</strong> {data.summary}</p>
        <p><strong>Experience:</strong> {data.experience}</p>
        <p><strong>Education:</strong> {data.education}</p>
        <p><strong>Skills:</strong> {data.skills}</p>
        <hr />
        <p className="text-green-600 whitespace-pre-wrap"><strong>AI Suggestions:</strong> {suggestion}</p>
      </div>
      <button onClick={handlePrint} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Export to PDF</button>
    </div>
  );
}

export default ResumePreview;
