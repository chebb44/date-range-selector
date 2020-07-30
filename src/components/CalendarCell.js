import React from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography";

export const CalendarCell = ({date, clickHandler, isActive = false, isSelected = false, isDisabled = false}) => {
  const cellClasses = classNames(
    "h-8 w-full cursor-pointer flex justify-center items-center",
    {"bg-orange-400": isActive},
    {"text-gray-500": isDisabled},
    {"bg-gray-100": isSelected}
  );
  return (
    <div className={cellClasses} onClick={()=> clickHandler(date)}>
      <Typography>
        {date?.getDate()}
      </Typography>
    </div>
  );
};
