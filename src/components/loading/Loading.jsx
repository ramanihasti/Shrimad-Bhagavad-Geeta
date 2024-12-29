import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center p-[185px]">
      <FontAwesomeIcon
        icon={faSpinner}
        className="text-2xl text-teal-950 animate-spin"
      />
    </div>
  );
}

export default Loading;
