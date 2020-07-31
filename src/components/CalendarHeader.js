import React from 'react';
import {weekDays} from "../constants";
import Typography from "@material-ui/core/Typography";

export const CalendarHeader = () => {
  return <>
    {weekDays.map(day => {
      return <div key={day} className="h-full w-full flex justify-center items-center">
        <Typography>
          {day}
        </Typography>
      </div>
    })}
  </>;
};
