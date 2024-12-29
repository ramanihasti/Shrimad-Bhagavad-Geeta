import React from "react";

function Title(props) {
  return (
    <div className="text-center flex flex-col flex-wrap items-center gap-4 p-8">
      <h2 className="text-[25px] font-serif font-semibold text-[#af713e]">
        {props.title}
      </h2>

      <p className="text-center text-[17px] text-[#323030] font-serif max-w-[800px]">
        {props.desc}
      </p>
    </div>
  );
}

export default Title;
