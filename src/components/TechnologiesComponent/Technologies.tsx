import { ProjectTileInterface } from "@/src/interfaces/frontendInterfaces";
import Image from "next/image";
import "./Technologies.css";

const TechnologiesList = ({
  technologiesData,
}: {
  technologiesData: ProjectTileInterface;
}) => {
  return (
    <div className="technologiesListContainer">
      {technologiesData.technologiesUsed.map((data, index) => {
        return (
          <Image
            key={index}
            src={data.technologyImage}
            alt={data.technologyName}
            height={40}
            title={data.technologyName}
            style={{
              marginLeft: index !== 0 ? `${-5}px` : "auto",
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
