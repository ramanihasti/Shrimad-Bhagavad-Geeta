import React from "react";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import Title from "../components/common/Title";

function Contact() {
  return (
    <>
      <Title
        title="Contact Us"
        desc="जन्मने वाले की मृत्यु निश्चित है और मरने वाले का जन्म निश्चित है इसलिए जो अटल है अपरिहार्य है उसके विषय में तुमको शोक नहीं करना चाहिये। Death is certain for the born, and re-birth is certain for the dead; therefore you should not feel grief for what is inevitable."
      />
      <div className="mb-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 px-6 md:px-28 py-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
