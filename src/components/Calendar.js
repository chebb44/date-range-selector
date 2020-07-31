import React from 'react';
import {CalendarCell} from "./CalendarCell";
import {FIRST_VALID_DATE, weekDays} from "../constants";
import Typography from "@material-ui/core/Typography";
import {getNowDateWithoutTime} from "../utils/dateUtils";


export const Calendar = ({days, startDate, endDate, hoverDate, selectStart, clickHandler, hoverHandler}) => {
  const firstDayShift = days[0].getDay();
  const emptyCells = new Array(firstDayShift).fill('');
  return <div className="w-1/2 ml-2 mr-2 grid grid-cols-7 grid-rows-6 gap-1">
    {weekDays.map(day => {
      return <div key={day} className="h-full w-full flex justify-center items-center">
        <Typography>
          {day}
        </Typography>
      </div>
    })}
    {
      emptyCells.map((day, i) => {
        return <div key={i}/>
      })
    }
    {
      days.map((day) => {
        const isActive = day?.valueOf() === startDate?.valueOf() || day?.valueOf() === endDate?.valueOf();
        const isSelected = day?.valueOf() > startDate?.valueOf() && day?.valueOf() < endDate?.valueOf();
        const isDisabled = day?.valueOf() < FIRST_VALID_DATE?.valueOf() || day?.valueOf() > getNowDateWithoutTime().valueOf();
        const isHoverRange = !selectStart && ((day?.valueOf() <= hoverDate?.valueOf() && day?.valueOf() > startDate?.valueOf()) ||
          (day?.valueOf() >= hoverDate?.valueOf() && day?.valueOf() < startDate?.valueOf()));
        return <CalendarCell
          key={day.toString()}
          date={day}
          isActive={isActive}
          isSelected={isSelected}
          isDisabled={isDisabled}
          isHoverRange={isHoverRange}
          clickHandler={clickHandler}
          hoverHandler={hoverHandler}
        />
      })
    }
  </div>;
};
