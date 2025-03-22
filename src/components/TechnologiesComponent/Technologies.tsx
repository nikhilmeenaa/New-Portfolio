import { ProjectTileInterface } from "@/src/interfaces/frontendInterfaces";
import Image from "next/image";
import "./Technologies.css";

const TechnologiesList = (technologiesData: ProjectTileInterface) => {
  return (
    <div className="technologiesListContainer">
      {technologiesData.technologiesUsed.map((data, index) => {
        return (
          <Image
            key={index}
            src={data.technologyImage}
            alt={data.technologyName}
            style={{
              marginLeft: index !== 0 ? `${-10}px` : "auto",
              zIndex: technologiesData.technologiesUsed.length - index,
              animationDelay: `${(index * 0.25) / 2}s`,
            }}
            className="logoImg"
          />
        );
      })}
    </div>
  );
};

export default TechnologiesList;
