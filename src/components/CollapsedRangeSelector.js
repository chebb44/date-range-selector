import React from 'react';
import arrowLeft from '../assets/ic_angle-left.svg';
import arrowRight from '../assets/ic_angle-right.svg';
import {getNowDateWithoutTime} from "../utils/dateUtils";
import {LEFT_SHIFT, RIGHT_SHIFT} from "../constants";


export const CollapsedRangeSelector = (
  {toggleIsSelectorOpen, arrowsClickHandler, rangeState: {startDate, endDate}}
) => {

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
            })} - ${endDate ? (endDate?.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })) : 'Choose a second date'}`} </span>
          )
        }
      </span>
      <span>
          <img className="inline p-2 cursor-pointer hover:bg-blue-300" src={arrowLeft} alt="left"
               onClick={() => arrowsClickHandler(LEFT_SHIFT)}/>
          <img className="inline p-2 cursor-pointer hover:scale-110" src={arrowRight} alt="right"
               onClick={() => arrowsClickHandler(RIGHT_SHIFT)}/>
      </span>
    </div>
  );
};
