import React from 'react';

const ExamRadio = ({ name, selectedOption, setSelectedOption }) => {
  // An array of objects keeping your storage value keys clean 
  // while displaying friendly text on the screen
  const exams = [
    { label: "Term Test 1", value: "TT1" },
    { label: "Term Test 2", value: "TT2" },
    { label: "End Sem", value: "ESE" },
  ];

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full text-amber-800 text-xl font-mono font-bold place-items-center">
        {exams.map((exam) => (
          <div key={exam.value} className="flex cursor-pointer gap-2 justify-self-start px-6 py-1">
            <input
              className="cursor-pointer accent-[#B83D1E]"
              type="radio"
              id={`${name}-${exam.value}`}
              name={name}
              value={exam.value}
              checked={selectedOption === exam.value}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label className="cursor-pointer" htmlFor={`${name}-${exam.value}`}>
              {exam.label}
            </label>
          </div>
        ))}
      </div>
  );
};

export default ExamRadio;