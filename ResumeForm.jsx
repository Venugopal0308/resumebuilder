import React, { useState } from "react";
import axios from "axios";

const ResumeForm = ({ setSuggestions }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send suggestion request
      const response = await axios.post("http://localhost:5000/api/resume/suggestions", {
        summary: formData.summary,
        experience: formData.experience
      });

      console.log("AI Suggestions:", response.data.suggestions);
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Error generating suggestions:", error.response?.data || error.message);
      alert("Failed to generate suggestions.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="summary" placeholder="Summary" onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="experience" placeholder="Experience" onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="education" placeholder="Education" onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="skills" placeholder="Skills" onChange={handleChange} className="w-full p-2 border rounded" />
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Generate Suggestions</button>
    </form>
  );
};

export default ResumeForm;
