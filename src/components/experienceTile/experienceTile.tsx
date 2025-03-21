import { ExperienceTileInterface } from "@/src/interfaces/frontendInterfaces";
import Image from "next/image";
import "./ExperienceTile.css";

const ExperienceTile = (data: ExperienceTileInterface) => {
  return (
    <div className="ExperienceTile">
      <div className="logoSection">
        <Image src={data.companyLogo} alt={data.companyName} />
      </div>
      <div className="infoSection">
        <div className="headingSection">
          <div className="companyRole">
            {data.companyName + " - " + data.roleName}
          </div>
          <div className="timeDuration">
            {data.startDate + "-" + data.endDate}
          </div>
        </div>
        <div className="experienceDescription">
          {data.experienceDescription}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTile;
