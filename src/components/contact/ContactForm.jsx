import React from "react";
import emailjs from "@emailjs/browser";
// import dotenv from "dotenv";
// dotenv.config();

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(() => {
        alert("SUCCESS!");
        e.target.reset();
      })
      .catch((error) => {
        alert("FAILED...", error.text);
      });
  }

  return (
    <>
      <form
        className="bg-[#d4bdafa5] border border-[#eeecec] rounded-md px-8 md:px-12 py-8"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              id="fname"
              type="text"
              name="fname"
              placeholder="First Name"
              required
              className="border border-neutral-300 rounded-md h-10 w-full placeholder:font-serif placeholder:p-3 placeholder:text-[14.5px]"
            />

            <input
              id="lname"
              type="text"
              name="lname"
              placeholder="Last Name"
              required
              className="border border-neutral-300 rounded-md h-10 w-full placeholder:font-serif placeholder:p-3 placeholder:text-[14.5px]"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Id : xyz@gmail.com"
              required
              className="border border-neutral-300 rounded-md h-10 w-full placeholder:font-serif placeholder:p-3 placeholder:text-[14.5px]"
            />

            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Mobile No."
              required
              className="border border-neutral-300 rounded-md h-10 w-full placeholder:font-serif placeholder:p-3 placeholder:text-[14.5px]"
            />
          </div>

          <div>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="border border-neutral-300 rounded-md h-10 w-full placeholder:font-serif placeholder:p-3 placeholder:text-[14.5px]"
            />
          </div>

          <div>
            <textarea
              id="message"
              type="text"
              name="message"
              placeholder="Message"
              required
              cols={78}
              rows={5}
              className="border border-neutral-300 rounded-md w-full placeholder:font-serif placeholder:p-3 placeholder:text-[14.5px]"
            />
          </div>
          <div className="flex items-center justify-center w-auto">
            <button className="bg-[#dabda9] py-1.5 px-6 rounded-md text-[16px] font-serif drop-shadow-md shadow-md shadow-[#1f1e1e]">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
