import React from 'react';
import {CalendarCell} from "./CalendarCell";
import {weekDays} from "../constants";
import Typography from "@material-ui/core/Typography";


export const Calendar = ({days, clickHandler}) => {
  const firstDayShift = days[0].getDay();
  const emptyCells = new Array(firstDayShift).fill('');
  return <div className="w-1/2 ml-2 mr-2 grid grid-cols-7 grid-rows-6 h-56">
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
      days.map(day => {
        return <CalendarCell
          key={day.toString()}
          date={day}
          clickHandler={clickHandler}
        />
      })
    }
  </div>;
};
