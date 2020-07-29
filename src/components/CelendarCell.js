import React from 'react';

export const CelendarCell = ({date, clickHandler}) => {
  return (
    <div className="h-4 w-4 rounded bg-gray-300 flex justify-center items-center p-4" onClick={() => clickHandler(date)}>
      <p>
        {date.getDate()}
      </p>
    </div>
  );
};
