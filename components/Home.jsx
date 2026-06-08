import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-[#dbc397] text-amber-900 flex flex-col relative overflow-hidden">
      
      {/* Main Container Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col items-center flex-grow justify-center">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mb-16 flex flex-col items-center">
          <h1 className="font-mono font-bold text-4xl md:text-6xl text-amber-900 tracking-wider uppercase mb-6 drop-shadow-[0_0_15px_rgba(204,34,34,0.2)]">
            Everything related to college exams in one place.
          </h1>
          <p className="text-base md:text-lg text-amber-800 max-w-2xl leading-relaxed mb-8">
            Your all-in-one college resource center. Find past exam papers, track down library books on a map, view your syllabus, or upload exam papers to help your classmates out.
          </p>
          <button
            onClick={() => navigate("/Papers")}
            className="group hover:scale-105 active:scale-98 cursor-pointer px-8 h-12 bg-[#B83D1E] border-2 border-[#B83D1E] font-mono font-bold tracking-widest text-sm rounded-full text-white shadow-[0_4px_20px_rgba(170,17,17,0.3)] hover:bg-white hover:text-[#B83D1E] hover:border-[#ff4444] transition-all duration-200 ease-out"
          >
            GET STARTED →
          </button>
        </div>

        {/* Core Features Grid Dashboard */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Feature 1: Library Map */}
          <div className="bg-amber-100 border border-amber-900 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#B83D1E]/50 shadow-lg shadow-black/50 transition-all duration-300">
            <div className="p-3 bg-[#dbc397] w-fit rounded-xl border border-amber-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#b83d1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 4px rgba(204,34,34,0.5))" }}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-lg text-amber-900 tracking-wide">
              Library Map
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Use our interactive digital floor plan to quickly point out the exact shelf for your book.
            </p>
          </div>

          {/* Feature 2: Download Papers */}
          <div className="bg-amber-100 border border-amber-900 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#B83D1E]/50 shadow-lg shadow-black/50 transition-all duration-300">
            <div className="p-3 bg-[#dbc397] w-fit rounded-xl border border-amber-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#b83d1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 4px rgba(204,34,34,0.5))" }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-lg text-amber-900 tracking-wide">
              Download Papers
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Pick your branch and current semester to download previous Term Tests and Final Exam question papers instantly.
            </p>
          </div>

          {/* Feature 3: Upload Papers */}
          <div className="bg-amber-100 border border-amber-900 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#B83D1E]/50 shadow-lg shadow-black/50 transition-all duration-300">
            <div className="p-3 bg-[#dbc397] w-fit rounded-xl border border-amber-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#b83d1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 4px rgba(204,34,34,0.5))" }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-lg text-amber-900 tracking-wide">
              Upload Papers
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Help your peers study better. If you have copies of recent exam papers upload those here to keep this website running.
            </p>
          </div>

          {/* Feature 4: Syllabus Section */}
          <div className="bg-amber-100 border border-amber-900 rounded-2xl p-6 flex flex-col gap-4 hover:border-[#B83D1E]/50 shadow-lg shadow-black/50 transition-all duration-300">
            <div className="p-3 bg-[#dbc397] w-fit rounded-xl border border-amber-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#b83d1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 4px rgba(204,34,34,0.5))" }}>
                <circle cx="12" cy="12" r="3" />
                <circle cx="6" cy="6" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="18" cy="18" r="2" />
                <circle cx="6" cy="18" r="2" />
                <line x1="10.5" y1="10.5" x2="7.5" y2="7.5" />
                <line x1="13.5" y1="10.5" x2="16.5" y2="7.5" />
                <line x1="13.5" y1="13.5" x2="16.5" y2="16.5" />
                <line x1="10.5" y1="13.5" x2="7.5" y2="16.5" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-lg text-amber-900 tracking-wide">
              Syllabus
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Find every subject's syllabus by selecting your Branch, Semester and Subject.
            </p>
          </div>

        </div>

        {/* Footer Terminal Box Label */}
        <div className="border-t border-amber-900 w-full pt-6 flex items-center justify-between font-mono text-[11px] text-[#ba3e1f] tracking-widest uppercase">
          <span>Made by : Nishant Vishwakarma | IT</span>
        </div>

      </div>
    </div>
  );
};

export default Home;