import React from 'react';

export const CalendarEmptyCells = (cellsNumber) => {
  const emptyCells = new Array(cellsNumber).fill('');
  return <>
    {
      emptyCells.map((day, i) => {
        return <div key={i}/>
      })
    }
  </>;
};
