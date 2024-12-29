import React from "react";
import Info from "./Info";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    icon: faLocationDot,
    name: "Location",
    detail: "A108 Adam Street, New York, NY 535022",
  },
  {
    icon: faPhone,
    name: "Call Us",
    detail: "+1 5589 55488 55",
  },
  {
    icon: faEnvelope,
    name: "Email Us",
    detail: "info@example.com",
  },
];

function ContactInfo() {
  return (
    <div className="bg-[#d4bdafa5] text-neutral-800 border border-[#eeecec] rounded-md p-8 flex flex-col gap-8">
      {data.map((info, index) => {
        return <Info key={index} info={info} />;
      })}
    </div>
  );
}

export default ContactInfo;
