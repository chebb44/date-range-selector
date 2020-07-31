import React from 'react';
import {CalendarCell} from "./CalendarCell";
import {FIRST_VALID_DATE} from "../constants";
import {getNowDateWithoutTime} from "../utils/dateUtils";
import {CalendarHeader} from "./CalendarHeader";
import {CalendarEmptyCells} from "./CalendarEmptyCells";


export const Calendar = (
  {
    rangeState: {startDate, endDate, hoverDate, selectStart}, days, clickHandler, hoverHandler
  }) => {
  const firstDayShift = days[0].getDay();
  return <div className="w-1/2 ml-2 mr-2 grid grid-cols-7 grid-rows-6 gap-1">
    <CalendarHeader/>
    <CalendarEmptyCells cellsNumber={firstDayShift}/>
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
