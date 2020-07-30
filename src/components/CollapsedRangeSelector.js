import React from 'react';
import arrowLeft from '../assets/ic_angle-left.svg';
import arrowRight from '../assets/ic_angle-right.svg';
import {getNowDateWithoutTime} from "../utils/dateUtils";


export const CollapsedRangeSelector = ({toggleIsSelectorOpen, rangeState: {startDate, endDate}, updateRangeState}) => {
  const shiftRangeCallback = (shift) => {
    const newStartDate = new Date(startDate.getTime());
    newStartDate.setDate(startDate.getDate() + shift);
    const newEndDate = new Date(endDate.getTime())
    newEndDate.setDate(endDate.getDate() + shift);
    updateRangeState({startDate: newStartDate, startPeriod: newStartDate, endDate: newEndDate, endPeriod: newEndDate});
  }
  const todayDate = getNowDateWithoutTime();
  const isToday = todayDate.valueOf() === startDate.valueOf() && todayDate.valueOf() === endDate.valueOf();
  const shiftStep = 1;
  return (
    <div className="border-blue-400">
      <span className="cursor-pointer" onClick={toggleIsSelectorOpen}>
        <i className="fa fa-calendar text-gray-700" aria-hidden="true"/>
        {
          isToday ? (
            <span className="text-xs font-bold p-2"> {`Today, ${endDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}`} </span>
          ) : (
            <span className="text-xs font-bold p-2"> {`${startDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })} - ${endDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}`} </span>
          )
        }
      </span>
      <span>
          <img className="inline p-2 cursor-pointer" src={arrowLeft} alt="left"
               onClick={() => shiftRangeCallback(-shiftStep)}/>
          <img className="inline p-2 cursor-pointer" src={arrowRight} alt="right"
               onClick={() => shiftRangeCallback(shiftStep)}/>
      </span>
    </div>
  );
};
