import React, { useState } from "react";
const url = import.meta.env.VITE_SUPABASE_URL;

const ExamCard = (props) => {
  const { subtitle, title,examType } = props;
  const bucket = "subjects";
  const cleanSubject = title.replace(/[\s\.\,\-]+/g, "_");

  // The direct public link to your zip folder package:
  const zipDownloadUrl = `${url}/storage/v1/object/public/${bucket}/${examType}/${cleanSubject}/${cleanSubject}.zip`;

  return (
    <div className="p-4 flex flex-col gap-2 items-center border bg-amber-100 border-amber-900 rounded-2xl">
      {/* Title scales from text-2xl up to text-4xl */}
      <p className="font-bold text-2xl sm:text-3xl lg:text-4xl text-amber-900">{title}</p>
      {/* Subtitle scales from text-sm up to text-xl */}
      <p className="text-sm sm:text-base lg:text-xl text-[#ba3e1f] mb-3">{subtitle}</p>
      {/* Button text scales from text-xs up to text-base */}
      <button
        className="flex gap-3 items-center justify-center hover:scale-105 cursor-pointer bg-[#B83D1E] border-2 border-[#B83D1E] font-mono hover:bg-white hover:text-[#B83D1E] rounded-3xl w-full h-10 text-white text-xs sm:text-sm lg:text-base mt-auto"
        onClick={() => {
          window.open(zipDownloadUrl);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={22}
          id="download"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          >
            <path d="M1 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M6 11l4 4 4-4M10 1v14" />
          </g>
        </svg>
        Download Zip File
      </button>
    </div>
  );
};

export default ExamCard;