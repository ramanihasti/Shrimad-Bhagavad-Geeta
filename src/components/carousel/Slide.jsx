import React from "react";

function Slide(props) {
  return (
    <div className="h-[80vh] w-full md:h-[90vh] relative">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[rgba(17,17,17,0.84)] opacity-80 z-[1000]" />
      <img src={props.img} alt="" className="h-full w-full object-cover" />
    </div>
  );
}

export default Slide;
