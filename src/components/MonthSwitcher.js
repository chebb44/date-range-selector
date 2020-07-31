import React from 'react';
import arrowLeft from '../assets/ic_angle-left.svg';
import doubleArrowLeft from '../assets/ic_angle_double_left.svg';
import arrowRight from '../assets/ic_angle-right.svg';
import doubleArrowRight from '../assets/ic_angle_double_right.svg';
import {SHIFT_DOUBLE_LEFT_CLICK, SHIFT_DOUBLE_RIGHT_CLICK, SHIFT_LEFT_CLICK, SHIFT_RIGHT_CLICK} from "../constants";

export const MonthSwitcher = (
  {
    clickHandler,
    leftPeriod,
    rightPeriod,
    allowedArrows: {
      rightShiftAllow,
      doubleRightShiftAllow,
      leftShiftAllow,
      doubleLeftShiftAllow
    }
  }) => {
  return (
    <div className="flex justify-between">
      <div className="flex w-1/2 items-center justify-between pl-4 pr-4">
        <div className="w-12 flex justify-between items-center">
          <div className="w-4 h-4">
            {leftShiftAllow && <img className="cursor-pointer" src={arrowLeft} alt="left"
                                    onClick={() => clickHandler(SHIFT_LEFT_CLICK)}/>}
          </div>
          <div className="w-4 h-4">
            {doubleLeftShiftAllow && <img className="cursor-pointer" src={doubleArrowLeft} alt="double-left"
                                          onClick={() => clickHandler(SHIFT_DOUBLE_LEFT_CLICK)}/>}
          </div>
        </div>
        <p className="font-bold text-sm">
          {leftPeriod.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
        </p>
        <div className="w-12"/>
      </div>
      <div className="flex w-1/2 items-center justify-between pl-4 pr-4">
        <div className="w-12"/>
        <p className="font-bold text-sm">
          {rightPeriod.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
        </p>
        <div className="w-12 flex justify-between items-center">
          <div className="w-4 h-4">
            {doubleRightShiftAllow && <img className="cursor-pointer" src={doubleArrowRight} alt="double-right"
                                           onClick={() => clickHandler(SHIFT_DOUBLE_RIGHT_CLICK)}/>}
          </div>
          <div className="w-4 h-4">
            {rightShiftAllow && <img className="cursor-pointer" src={arrowRight} alt="right"
                                     onClick={() => clickHandler(SHIFT_RIGHT_CLICK)}/>}
          </div>
        </div>
      </div>
    </div>
  );
};
