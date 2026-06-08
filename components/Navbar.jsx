import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FolderCode } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // Add this inside your Navbar component
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function: Ensures scrolling resets if the component unmounts unexpectedly
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between items-center h-16 sticky top-0 z-50 bg-slate-900 px-2 text-white">
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
        <FolderCode color="#B83D1E" size={60} className="px-1" />
        <div className="hidden sm:flex items-center justify-center w-full gap-3">
          <button
            onClick={() => navigate("/")}
            className="hover:scale-105 cursor-pointer p-2  border-b-2 border-transparent hover:border-[#B83D1E] font-mono  text-xl     text-white"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/library")}
            className="hover:scale-105 cursor-pointer p-2  border-b-2 border-transparent hover:border-[#B83D1E] font-mono  text-xl     text-white"
          >
            Library
          </button>
          <button
            onClick={() => navigate("/Papers")}
            className="hover:scale-105 cursor-pointer p-2  border-b-2 border-transparent hover:border-[#B83D1E] font-mono text-xl    text-white"
          >
            Papers
          </button>
          <button
            onClick={() => navigate("/Syllabus")}
            className="hover:scale-105 cursor-pointer p-2  border-b-2 border-transparent hover:border-[#B83D1E] font-mono text-xl    text-white"
          >
            Syllabus
          </button>
          <button
            onClick={() => navigate("/UploadSection")}
            className="hover:scale-105 cursor-pointer p-2  border-b-2 border-transparent hover:border-[#B83D1E] font-mono text-xl    text-white"
          >
            Upload
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-16 gap-9 left-0 h-[calc(100vh-4rem)] z-50 flex flex-col bg-slate-900 border-r border-slate-800 w-72 p-6">
          <button
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            className="group flex items-center justify-between gap-3 w-full px-4 py-1 text-slate-300 active:scale-95 active:bg-slate-800/80 font-mono text-sm transition-all border-l-4 border-[#B83D1E]"
          >
            Home{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
          <button
            onClick={() => {
              navigate("/library");
              setIsOpen(false);
            }}
            className="group flex items-center justify-between gap-3 w-full px-4 py-1 text-slate-300 active:scale-95 active:bg-slate-800/80 font-mono text-sm transition-all border-l-4 border-[#B83D1E]"
          >
            Library{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
          <button
            onClick={() => {
              navigate("/Papers");
              setIsOpen(false);
            }}
            className="group flex items-center justify-between  gap-3 w-full px-4 py-1 text-slate-300 active:scale-95 active:bg-slate-800/80 font-mono text-sm transition-all border-l-4 border-[#B83D1E]"
          >
            Papers{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
          <button
            onClick={() => {
              navigate("/Syllabus");
              setIsOpen(false);
            }}
            className="group flex items-center justify-between gap-3 w-full px-4 py-1 text-slate-300 active:scale-95 active:bg-slate-800/80 font-mono text-sm transition-all border-l-4 border-[#B83D1E]"
          >
            Syllabus{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
          <button
            onClick={() => {
              navigate("/UploadSection");
              setIsOpen(false);
            }}
            className="group flex items-center justify-between gap-3 w-full px-4 py-1 text-slate-300 active:scale-95 active:bg-slate-800/80 font-mono text-sm transition-all border-l-4 border-[#B83D1E]"
          >
            Upload{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right-icon lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
