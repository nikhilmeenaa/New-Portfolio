"use client";
import socialsData from "@/src/data/socialsData";
import Image from "next/image";
import "./SocialsSection.css";

const SocialsSection = () => {
  const handleSocialsClick = (socialsLink: string) => {
    if (socialsLink && typeof window !== "undefined") {
      window.open(socialsLink);
    }
  };
  return (
    <div className="socialsSectionContainer">
      {socialsData.map((data, index) => {
        return (
          <Image
            key={"socials" + index}
            src={data.logo}
            alt={data.name}
            onClick={() => handleSocialsClick(data.url)}
            height={35}
          />
        );
      })}
    </div>
  );
};
export default SocialsSection;
