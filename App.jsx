import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";

const App = () => {
  const [suggestions, setSuggestions] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Smart Resume Builder</h1>
      <ResumeForm setSuggestions={setSuggestions} />
      {suggestions && (
        <div className="mt-6 p-4 bg-gray-100 border rounded">
          <h2 className="text-xl font-semibold mb-2">AI Suggestions</h2>
          <pre className="whitespace-pre-wrap">{suggestions}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
