import React from 'react';
import {createMonthArray} from "../utils/dateUtils";
import {CalendarCell} from "./CalendarCell";
import {START_CALENDAR, weekDays} from "../constants";
import {MonthSwitcher} from "./MonthSwitcher";


export const Calendar = ({rangeState: {startDate, endDate, startPeriod, endPeriod}, updateRangeState, type}) => {
  const currentDate = type === START_CALENDAR ? startPeriod : endPeriod;

  const monthDays = createMonthArray({month: 4, year: 2020});
  const firstDayShift = monthDays[0].getDay();
  const emptyCells = new Array(firstDayShift).fill('');
  return (
    <div className="w-5/12 p-2 h-full">
      <div className="">
        <MonthSwitcher
          date={currentDate}
        />
      </div>
      <div className="grid grid-cols-7 grid-rows-6">
        {weekDays.map(day => {
          return <CalendarCell
            key={day}
            text={day}/>
        })}
        {
          emptyCells.map((day, i) => {
            return <CalendarCell
              key={i}/>
          })
        }
        {
          monthDays.map(day => {
            return <CalendarCell
              key={day.toString()}
              date={day}
            />
          })
        }
      </div>
    </div>
  );
};
