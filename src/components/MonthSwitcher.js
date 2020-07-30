import React from 'react';
import arrowLeft from '../assets/ic_angle-left.svg';
import doubleArrowLeft from '../assets/ic_angle_double_left.svg';
import arrowRight from '../assets/ic_angle-right.svg';
import doubleArrowRight from '../assets/ic_angle_double_right.svg';
import {DOUBLE_SHIFT, FIRST_VALID_DATE, SINGLE_SHIFT} from "../constants";
import {getNowDateWithoutTime, isEqualMonthYear} from "../utils/dateUtils";

export const MonthSwitcher = ({currentPeriod, changePeriod}) => {
  const changePeriodHandler = (shift) => {
    const newPeriod = new Date(currentPeriod.getTime());
    newPeriod.setMonth(currentPeriod.getMonth() + shift);
    changePeriod(newPeriod)
  }
  const rightShiftAllow = !isEqualMonthYear(currentPeriod, getNowDateWithoutTime());
  const leftShiftAllow = !isEqualMonthYear(currentPeriod, FIRST_VALID_DATE);
  return (
    <div className="flex justify-between">
      <div className="w-12 flex">
        {leftShiftAllow && <div className="w-full flex justify-between">
          <img className="cursor-pointer" src={arrowLeft} alt="left"
               onClick={() => changePeriodHandler(-SINGLE_SHIFT)}/>
          <img className="cursor-pointer" src={doubleArrowLeft} alt="double-left"
               onClick={() => changePeriodHandler(-DOUBLE_SHIFT)}/>
        </div>
        }
      </div>
      <p className="font-bold text-sm">
        {currentPeriod.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
      </p>
      <div className="w-12 flex">
        {rightShiftAllow && <div className="flex">
          <img className="cursor-pointer" src={arrowRight} alt="right"
               onClick={() => changePeriodHandler(SINGLE_SHIFT)}/>
          <img className="cursor-pointer" src={doubleArrowRight} alt="double-right"
               onClick={() => changePeriodHandler(DOUBLE_SHIFT)}/>
        </div>
        }
      </div>
    </div>
  );
};
