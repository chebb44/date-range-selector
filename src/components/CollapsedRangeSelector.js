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
    updateRangeState({startDate: newStartDate, endDate: newEndDate});
  }
  const todayDate = getNowDateWithoutTime();
  const isToday = todayDate.valueOf() === startDate.valueOf() && todayDate.valueOf() === endDate.valueOf();
  console.log('isToday', isToday);
  return (
    <div className="border-blue-400">
      <span className="" onClick={toggleIsSelectorOpen}>
        <i className="fa fa-calendar text-gray-300" aria-hidden="true"/>
        {
          isToday ? (
            <span className="text-xs font-bold p-2"> {`Today, ${startDate.toLocaleDateString('en-US', {
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
      <span className="">
          <img className="inline p-2" src={arrowLeft} alt="left" onClick={() => shiftRangeCallback(-1)}/>
          <img className="inline p-2" src={arrowRight} alt="right" onClick={() => shiftRangeCallback(1)}/>
        </span>
    </div>
  );
};
