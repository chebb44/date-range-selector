import React from 'react';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography";

export const CalendarCell = (
  {
    date,
    clickHandler,
    hoverHandler,
    isActive = false,
    isSelected = false,
    isDisabled = false,
    isHoverRange = false
  }
) => {
  const cellClasses = classNames(
    "h-8 w-full cursor-pointer flex justify-center items-center hover:shadow",
    {"bg-orange-500 text-white": isActive},
    {"text-gray-500": isDisabled},
    {"bg-orange-300": isSelected},
    {"bg-orange-200": isHoverRange}
  );
  return (
    <div
      className={cellClasses}
      onClick={() => clickHandler(date)}
      onMouseEnter={() => hoverHandler(date)}
    >
      <Typography>
        {date?.getDate()}
      </Typography>
    </div>
  );
};
