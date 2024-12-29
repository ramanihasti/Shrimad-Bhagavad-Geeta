import React from "react";
import { useNavigate } from "react-router-dom";

function VerseOfTheDay() {
  const navigate = useNavigate();

  function goToVerse() {
    navigate(`/chapter/5/verses/8`);
  }

  return (
    <div className="p-8 mt-9">
      <div className="bg-[#fbf7f7] px-12 py-8 shadow-md shadow-[#a5a2a2b4] flex items-start flex-col gap-4">
        <p className="text-[16px] font-[cursive] font-semibold text-[#ca7631]">
          Verse of the day - BG 5.8
        </p>
        <p className="text-[17.5px] font-serif text-neutral-500">
          I do nothing at all," thus would the harmonized knower of Truth think,
          seeing, hearing, touching, smelling, eating, going, sleeping, and
          breathing.
        </p>
        <button
          className="font-serif border border-neutral-300 bg-[#f9f4f0] px-2 py-1 drop-shadow-md rounded-md"
          onClick={goToVerse}
        >
          SEE MORE
        </button>
      </div>
    </div>
  );
}

export default VerseOfTheDay;
