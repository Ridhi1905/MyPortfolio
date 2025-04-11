import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { Certificates } from "../../Resources/Certificates";

function Certificate() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Certificates" />
      <div className="flex py-10 gap-5 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#ffa7b6] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {Certificates.map((certificate, index) => (
            <div 
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-x px-5 
                    ${
                        selectedItemIndex === index
                        ? "text-secondary border-secondary border-l-4 -ml-[3px] bg-[#ffc0cb6a] py-3"
                        : "text-black"
                    }`}
              >
                {certificate.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {Certificates[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-sm">
            {Certificates[selectedItemIndex].By}
          </h1>
          <h1 className="text-tertiary text-sm">
            {Certificates[selectedItemIndex].period}
          </h1>
          <p className="text-tertiary text-sm">
            {Certificates[selectedItemIndex].CredentialID}</p>
          <a
            href={Certificates[selectedItemIndex].Link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary text-sm underline"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
}
export default Certificate;
