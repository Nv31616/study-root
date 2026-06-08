import { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Library from "../components/Library.jsx";
import Papers from "../components/Papers.jsx";
import Syllabus from "../components/Syllabus.jsx";
import ExamSubjects from "../components/ExamSubjects.jsx";
import SyllabusSubjects from "../components/SyllabusSubjects.jsx";
import UploadSection from "../components/UploadSection.jsx";
import Home from "../components/Home.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/Papers" element={<Papers />} />
          <Route path="/Syllabus" element={<Syllabus />} />
          <Route path="/subjects" element={<ExamSubjects />} />
          <Route path="/Syllabus/subjects" element={<SyllabusSubjects />} />
          <Route path="/UploadSection" element={<UploadSection />} />
        </Routes>
    </div>
  );
}

export default App;
