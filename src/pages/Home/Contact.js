import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    Name : "Ridhima Chauhan",
    Gender : "Female",
    Email : "ridhimac2004@gmail.com",
    Phone : "9024041965",
    Country : "India",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col justify-between items-center">
        <div className="flex flex-col gap-1">
        <h1 className="text-tertiary">{"{"}</h1>
        {Object.keys(user).map((key) => (
          <h1 className="ml-1">
            <span className="text-tertiary">{key}</span>:{" "}
            <span className="text-tertiary">{user[key]}</span>
          </h1>
        ))}
        <h1 className="text-tertiary">{"}"}</h1>
        </div>
        <div className="h-[500px]">
        <dotlottie-player
            src="https://lottie.host/f0230f90-3602-49f9-b608-7cb3657296c9/gulY7Xxyic.lottie"
            background="transparent"
            speed="1"
            autoplay
        ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}
export default Contact;
