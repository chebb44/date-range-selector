import React, {useCallback} from 'react';
import {createMonthArray} from "../utils/dateUtils";
import {CalendarCell} from "./CalendarCell";
import {START_CALENDAR, weekDays} from "../constants";
import {MonthSwitcher} from "./MonthSwitcher";


export const Calendar = ({rangeState: {startDate, endDate, startPeriod, endPeriod}, updateRangeState, type: calendarType}) => {
  const currentPeriod = calendarType === START_CALENDAR ? startPeriod : endPeriod;
  const activeDay = calendarType === START_CALENDAR ? startDate : endDate;

  const monthDays = createMonthArray(currentPeriod);
  const firstDayShift = monthDays[0].getDay();
  const emptyCells = new Array(firstDayShift).fill('');
  const changeDate = useCallback((newDate) => {
    updateRangeState({[calendarType === START_CALENDAR ? 'startDate' : 'endDate']: newDate});
  }, [calendarType, updateRangeState]);
  const changePeriod = useCallback((newPeriod) => {
    updateRangeState({[calendarType === START_CALENDAR ? 'startPeriod' : 'endPeriod']: newPeriod});
  }, [calendarType, updateRangeState]);

  return (
    <div className="w-5/12 mt-4 p-4 h-full">
      <div className="">
        <MonthSwitcher
          currentPeriod={currentPeriod}
          changePeriod={changePeriod}
          calendarType={calendarType}
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
              activeDay={activeDay}
              clickHandler={changeDate}
              calendarType={calendarType}
              endDate={endDate}
              startDate={startDate}
            />
          })
        }
      </div>
    </div>
  );
};
