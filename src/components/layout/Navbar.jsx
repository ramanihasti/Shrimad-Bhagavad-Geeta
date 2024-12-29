import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { link: "/", text: "Home" },
  // {link:"/chapter" , text:"Chapter"},
  { link: "/blog", text: "Blog" },
  { link: "/knowledge", text: "Knowledge" },
  { link: "/about", text: "About" },
  { link: "/contact", text: "Contact" },
];

function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  function toogalOpen() {
    setIsopen(!isOpen);
  }
  return (
    <>
      <div className="bg-[#282727] flex fixed top-0 left-0 right-0 z-[1000] item-center justify-between px-16 py-5">
        <div className="w-100px -ml-6">
          <img src="/images/2.png" alt="" className="w-[220px]" />
        </div>

        <ul
          className={` flex md:items-center text-xl md:text-base gap-8 overflow-hidden z-[1000] flex-col md:flex-row transition-all transition-none bg-[rgba(11,11,11,0.84)] md:bg-transparent fixed md:static top-[88px] md:top-auto left-0 md:left-auto right-0 md:right-auto md:h-auto md:p-0 font-[cursive] text-[#eed3a0] ${
            isOpen ? "h-[calc(100vh-88px)] p-8 w-[420px]" : "h-[0px] p-0"
          }`}
        >
          {links.map((value, index) => {
            return (
              <li key={index} onClick={toogalOpen}>
                <Link to={value.link}>{value.text}</Link>
              </li>
            );
          })}
        </ul>

        <button
          className="block md:hidden w-10 h-10 border border-neutral-500 rounded-md"
          onClick={toogalOpen}
        >
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </button>
      </div>
      <div className="h-[88px]" />
    </>
  );
}

export default Navbar;
// 'flex flex-row items-center gap-6 font-[cursive] text-[#eed3a0] '
