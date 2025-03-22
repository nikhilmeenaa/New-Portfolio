"use client";
import contributionsData from "@/src/data/contributionData";
import "./contributionsHeatMap.css";
import { useEffect, useRef, useState } from "react";

const MonthHeatMap = ({
  startMonth,
  endMonth,
  startYear,
  endYear,
}: {
  startMonth: number;
  endMonth: number;
  startYear: number;
  endYear: number;
}) => {
  const [contributionCountMap, setContributionCountMap] = useState<
    Map<string, number>
  >(new Map());
  // Function to get the number of days in a given month and year
  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
  }

  // Function to get an array of all dates in a given month and year
  function getDatesInMonth(year: number, month: number) {
    const numDays = getDaysInMonth(year, month + 1); // Adjust month to be 1-indexed
    const dates: Date[] = [];
    for (let day = 1; day <= numDays; day++) {
      const date = new Date(year, month, day); // Month is 0-indexed here
      dates.push(date);
    }
    return dates;
  }

  const getDatesForWholeYear = () => {
    let tempDates: Date[] = [];

    // Check if months are valid
    if (
      startMonth >= 1 &&
      endMonth >= 1 &&
      startMonth <= 12 &&
      endMonth <= 12 &&
      startMonth + startYear * 12 <= endMonth + endYear * 12
    ) {
      let currentMonth = startMonth;
      let currentYear = startYear;

      for (
        let i = 0;
        i <= endMonth + endYear * 12 - (startMonth + startYear * 12);
        i++
      ) {
        tempDates = [
          ...tempDates,
          ...getDatesInMonth(currentYear, currentMonth - 1),
        ];
        if (currentMonth + 1 > 12) {
          currentMonth = 1;
          currentYear++;
        } else {
          currentMonth++;
        }
      }
    }

    return tempDates;
  };

  const monthDates = getDatesForWholeYear();
  const [numberOfColumns, setNumberOfColumns] = useState(0);

  const getMonthsNames = () => {
    let tempMonthsName: string[] = [];

    // Check if months are valid
    if (
      startMonth >= 1 &&
      endMonth >= 1 &&
      startMonth <= 12 &&
      endMonth <= 12 &&
      startMonth + startYear * 12 <= endMonth + endYear * 12
    ) {
      let currentMonth = startMonth;
      let currentYear = startYear;

      for (
        let i = 0;
        i <= endMonth + endYear * 12 - (startMonth + startYear * 12);
        i++
      ) {
        const monthName = new Date(currentYear, currentMonth, 0).toLocaleString(
          "default",
          { month: "short" }
        );
        tempMonthsName.push(monthName);

        if (currentMonth + 1 > 12) {
          currentMonth = 1;
          currentYear++;
        } else {
          currentMonth++;
        }
      }
    }

    return tempMonthsName;
  };

  const getStartingGap = () => {
    return getDatesForWholeYear()[0].getDay();
  };

  useEffect(() => {
    const tempNumberOfColumns = parseInt(
      ((getStartingGap() + monthDates.length + 6) / 7).toString()
    );
    setNumberOfColumns(tempNumberOfColumns);
    const tempContributionCountMap: Map<string, number> = new Map();
    contributionsData.forEach((data) => {
      tempContributionCountMap.set(data.date, data.contributionCount);
    });
    setContributionCountMap(tempContributionCountMap);
  }, []);

  const ContributionInstance = ({
    index,
    day,
    contributionsCount,
  }: {
    index: number;
    day: Date;
    contributionsCount: number;
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltipContent, setTooltipContent] = useState("");

    const handleMouseEnter = () => {
      setIsHovered(true);
      setTooltipContent(
        contributionsCount + " contributions made on " + day.toDateString()
      ); // Example content
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setTooltipContent(""); // Clear content when not hovering
    };

    return (
      <div
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={handleMouseLeave}
        key={index}
        style={{
          gridRowStart: parseInt(
            (1 + ((index + getStartingGap()) % 7)).toString()
          ),
          gridColumnStart: parseInt(
            ((index + 7 + getStartingGap()) / 7).toString()
          ),
          // opacity: contributionsCount ? 0.1 * contributionsCount : 0.1,
          position: "relative",
          // backgroundColor: contributionsCount > 0 ? "green" : "black",
          // transition: "opacity 0.3s ease-in-out",
        }}
        className="dayHeatPoint"
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            opacity: contributionsCount ? 0.2 * contributionsCount : 0.1,
            position: "relative",
            backgroundColor: contributionsCount > 0 ? "green" : "black",
            transition: "opacity 0.3s ease-in-out",
          }}
        ></div>
        {isHovered && <div className="tooltip">{tooltipContent}</div>}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "space-around",
        gap: "10px",
        overflowX: "scroll",
        maxWidth: "100%",
        padding: "1rem",
      }}
      className="mapHeatSection"
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${getMonthsNames().length}, 1fr)`,
            width: "100%",
          }}
        >
          {getMonthsNames().map((monthName, monthIndex) => {
            return (
              <div
                style={{ fontSize: "0.9rem", textAlign: "center" }}
                key={monthName + monthIndex}
              >
                {monthName}
              </div>
            );
          })}
        </div>
        <div
          className="monthHeatMapContainer"
          style={{
            display: "grid",
            rowGap: "2px",
            columnGap: "2px",
            gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
            gridTemplateRows: "repeat(7, 1fr)",
          }}
        >
          {getDatesForWholeYear().map((day, index) => {
            return (
              <ContributionInstance
                key={"contributionsInstance" + index}
                day={day}
                index={index}
                contributionsCount={
                  contributionCountMap.has(day.toISOString().split("T")[0])
                    ? contributionCountMap.get(
                        day.toISOString().split("T")[0]
                      ) || 0
                    : 0
                }
              />
            );
          })}
        </div>
        <div>{contributionsData.length} contributions in the last year</div>
      </div>
    </div>
  );
};

export default MonthHeatMap;
