import React from 'react';
import {createMonthArray} from "../utils/dateUtils";
import {CelendarCell} from "./CelendarCell";


export const Calendar = () => {
  const monthDays = createMonthArray({month: 1, year: 2020});
  console.log(monthDays);
  return (
    <div className="grid grid-cols-7 grid-rows-6 w-4/12">
      {
        monthDays.map(day => {
          return <CelendarCell
            key={day.toString()}
            date={day}
          />
        })
      }
    </div>
  );
};
