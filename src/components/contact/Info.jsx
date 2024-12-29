import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Info(props) {
  return (
    <div className="flex items-center gap-4 px-6 py-4  bg-[#f5f2ef] rounded-sm">
      <div className="w-[20px] h-[20px] p-4 rounded-md border border-[#8d664b] hover:text-[#77593f] flex items-center justify-center hover:bg-transparent cursor-pointer bg-[#c8b49c] text-neutral-100">
        <FontAwesomeIcon icon={props.info.icon} />
      </div>
      <div>
        <h2 className="text-[17px] font-serif font-semibold text-neutral-700">
          {props.info.name}
        </h2>
        <p className="font-[italic] text-[16px] text-neutral-700">
          {props.info.detail}
        </p>
      </div>
    </div>
  );
}

export default Info;
