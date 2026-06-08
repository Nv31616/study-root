import React from "react";

const BranchRadio = ({ name, selectedOption, setSelectedOption }) => {
  const  branches = ["Comps","IT","CSE-DS","ICB","AIML","AIDS","Mech","EXTC"]
  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 grid-rows-4 w-full text-amber-800 text-xl font-mono font-bold place-items-center">
      {branches.map((branch) => (
        <div key={branch} className="flex cursor-pointer gap-2 justify-self-start px-6">
          <input
            className="cursor-pointer accent-[#B83D1E]"
            type="radio"
            id={`${name}-${branch}`}
            name={name}
            value={branch}
            checked={selectedOption === branch} // controlled by ExamCard
            onChange={(e) => setSelectedOption(e.target.value)} // updates ExamCard's state
          />
          <label className="cursor-pointer" htmlFor={`${name}-${branch}`}>{branch}</label>
        </div>
      ))}
    </div>
  );
};

export default BranchRadio;
