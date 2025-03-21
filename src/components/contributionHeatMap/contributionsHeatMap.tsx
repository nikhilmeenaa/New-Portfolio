import "./contributionsHeatMap.css";
import { useEffect, useState } from "react";

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
          { month: "long" }
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
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "10px",
        overflowX: "scroll",
        maxWidth: "100%",
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
              <div style={{ fontSize: "0.9rem" }} key={monthName + monthIndex}>
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
              <div
                key={index}
                style={{
                  gridRowStart: parseInt(
                    (1 + ((index + getStartingGap()) % 7)).toString()
                  ),
                  gridColumnStart: parseInt(
                    ((index + 7 + getStartingGap()) / 7).toString()
                  ),
                  opacity: Math.random(),
                }}
                className="dayHeatPoint"
              >
                {/* {index} */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonthHeatMap;
