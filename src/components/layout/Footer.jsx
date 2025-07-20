import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const icons = [
  {
    id: 1,
    icon: faFacebook,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: faTwitter,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: faInstagram,
    url: "https://www.instagram.com",
  },
  {
    id: 4,
    icon: faYoutube,
    url: "https://www.youtube.com",
  },
];

const links = [
  { link: "/policy", text: "Privacy Policy | " },
  { link: "/app", text: "App |" },
  { link: "/about", text: "About Us |" },
  { link: "/acknowledgements", text: "Acknowledgements |" },
  { link: "/contact", text: "Contact us" },
];

function Footer() {
  return (
    <div className="bg-[#856c56] flex flex-wrap flex-col items-center md:flex-row  md:justify-between p-8 md:px-28 md:py-8 text-neutral-100 gap-4">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-xl text-[#62371f] font-serif font-bold">
          || Srimad Bhagvat Gita ||
        </h2>
        <p className="md:text-end font-thin ">© 2024 The Art of Living</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-2 ml-[-26px] md:ml-0 md:gap-6">
          {icons.map((value, index) => {
            return (
              <a
                key={index}
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  // key={value.id}
                  key={index}
                  icon={value.icon}
                  className="bg-[#ae8d6b] p-2 rounded-full border border-[#dbba7d] text-white hover:border-white hover:shadow-md hover:shadow-[#cdad6e] cursor-pointer"
                />
              </a>
            );
          })}
        </div>

        <ul className="flex flex-col md:flex-row gap-2 font-[italic]  ">
          {links.map((value, index) => {
            return (
              <li key={index}>
                <Link to={value.link}>{value.text}</Link>
              </li>
            );
          })}

          {/* <li><Link to="/policy"> Privacy Policy | </Link></li>
                <li>Cookie Policy |</li>
                <li>Terms Of Use |</li>
                <li>Contact us</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
