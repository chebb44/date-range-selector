import React from 'react';
import arrowLeft from '../assets/ic_angle-left.svg';
import arrowRight from '../assets/ic_angle-right.svg';
import {getFirstMonthDay, getNowDateWithoutTime, getSiblingMonth} from "../utils/dateUtils";
import {FIRST_VALID_DATE, SHIFT_LEFT, SHIFT_RIGHT} from "../constants";


export const CollapsedRangeSelector = ({toggleIsSelectorOpen, rangeState: {startDate, endDate}, updateRangeState}) => {
  const shiftRangeCallback = (direction) => {
    let {startDate: newStartDate, endDate: newEndDate} = getSiblingMonth(endDate, direction);
    if (newEndDate.valueOf() > getNowDateWithoutTime().valueOf()) newEndDate = getNowDateWithoutTime();
    if (newStartDate.valueOf() < FIRST_VALID_DATE.valueOf()) newStartDate = FIRST_VALID_DATE;
    updateRangeState({
      startDate: newStartDate,
      startPeriod: getFirstMonthDay(newStartDate),
      endDate: newEndDate,
      endPeriod: getFirstMonthDay(newEndDate)
    });
  }
  const todayDate = getNowDateWithoutTime();
  const isToday = todayDate.valueOf() === startDate.valueOf() && todayDate.valueOf() === endDate.valueOf();
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
               onClick={() => shiftRangeCallback(SHIFT_LEFT)}/>
          <img className="inline p-2 cursor-pointer" src={arrowRight} alt="right"
               onClick={() => shiftRangeCallback(SHIFT_RIGHT)}/>
      </span>
    </div>
  );
};
