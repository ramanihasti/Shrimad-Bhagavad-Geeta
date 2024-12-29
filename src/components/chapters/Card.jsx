import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  function gotoChapterDetail() {
    navigate(`/chapter/${props.number}`);
  }
  return (
    <div
      className="bg-[#e8d5bd] hover:bg-[#f7efe6] border border-slate-400 hover:border-[#ad7f4a] rounded-md flex flex-col gap-2 p-8 cursor-pointer"
      onClick={gotoChapterDetail}
    >
      <h2 className="text-xl font-[italic] font-semibold text-[#5b4430] ">
        VERSES {props.number}
      </h2>
      <p className="font-serif text-[18.3px] font-semibold text-[#ba6a29]">
        {props.ename}
      </p>
      <p className="font-serif text-[18.3px] font-semibold text-[#705946]">
        {props.hname}
      </p>
      <p className="text-gray-700 font-serif">{props.summary}</p>

      <p className="text-neutral-800 font-[cursive] text-[14.2px]">
        <FontAwesomeIcon
          icon={faList}
          className="text-[#80492d] hover:text-[#5f3b29]"
        />{" "}
        {props.verses} verses
      </p>
    </div>
  );
}

export default Card;
