import React from "react";
import Script from "next/script";

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Script id="contact-alert" strategy="afterInteractive">
        {`alert("Welcome to the Contact Page");`}
      </Script>
    </div>
  );
};

export default Contact;

export const metadata = {
  title: "Contact Facebook",
  description:
    "This is facebook and we can connect to the world using facebook",
};
