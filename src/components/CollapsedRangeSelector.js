import React from 'react';
import arrowLeft from '../assets/ic_angle-left.svg'
import arrowRight from '../assets/ic_angle-right.svg'

export const CollapsedRangeSelector = ({toggleIsSelectorOpen, shiftLeftCallback, shiftRightCallback}) => {
  return (
    <div className="border-blue-400">
      <span className="" onClick={toggleIsSelectorOpen}>
        <i className="fa fa-calendar text-gray-300" aria-hidden="true"/>
        <span className="text-sm p-2"> Today, June 2020 </span>
      </span>
      <span className="">
        <img className="inline p-2" src={arrowLeft} alt="left" onClick={shiftLeftCallback}/>
        <img className="inline p-2" src={arrowRight} alt="right" onClick={shiftRightCallback}/>
      </span>
    </div>
  );
};
