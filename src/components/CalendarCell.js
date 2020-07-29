import React from 'react';

export const CalendarCell = ({date = null, clickHandler = null, text}) => {
  return (
    <div className="h-4 w-4 rounded flex justify-center items-center p-4"
         onClick={clickHandler && (() => clickHandler(date))}>
      <p className="text-sm">
        {date ? date.getDate() : text}
      </p>
    </div>
  );
};
