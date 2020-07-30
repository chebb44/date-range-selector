import React from 'react';
import classNames from 'classnames';
import {getNowDateWithoutTime} from "../utils/dateUtils";
import {FIRST_VALID_DATE, START_CALENDAR} from "../constants";

export const CalendarCell = ({activeDay, date = null, clickHandler = null, text, calendarType, startDate, endDate}) => {
  const checkValidDate = () => {
    return calendarType === START_CALENDAR ?
      date.valueOf() <= endDate.valueOf() :
      date.valueOf() >= startDate.valueOf();
  }
  const cellClasses = classNames("h-4 w-4 flex justify-center items-center p-4",
    {"cursor-pointer": date},
    {"bg-orange-400": date && date.valueOf() === activeDay.valueOf()},
    {
      "text-gray-500": date &&
        (date.valueOf() > getNowDateWithoutTime().valueOf() ||
          date.valueOf() < FIRST_VALID_DATE.valueOf() ||
          !checkValidDate())
    },
    {"bg-gray-100": date && (date.valueOf() >= startDate.valueOf() && date.valueOf() <= endDate.valueOf())}
  );
  return (
    <div className={cellClasses}
         onClick={clickHandler && (() => clickHandler(date))}>
      <p className="text-sm">
        {date ? date.getDate() : text}
      </p>
    </div>
  );
};
