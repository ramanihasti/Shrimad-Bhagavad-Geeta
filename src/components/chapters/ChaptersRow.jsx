import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

function ChaptersRow(props) {
  return (
    <>
      <div className="px-6 md:px-16 py-8">
        <h2 className="text-[22px] font-[cursive] font-semibold text-[#c47e4d] drop-shadow-md">
          <FontAwesomeIcon icon={faBookOpenReader} /> Chapters
        </h2>
        <div className="bg-orange-50 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {props.allChapter.map((value, index) => {
            return (
              <Card
                key={index}
                number={value.chapter_number}
                ename={value.name_meaning}
                hname={value.name}
                summary={value.chapter_summary}
                verses={value.verses_count}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ChaptersRow;
