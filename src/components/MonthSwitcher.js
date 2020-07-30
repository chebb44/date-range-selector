import React from 'react';
import arrowLeft from '../assets/ic_angle-left.svg';
import doubleArrowLeft from '../assets/ic_angle_double_left.svg';
import arrowRight from '../assets/ic_angle-right.svg';
import doubleArrowRight from '../assets/ic_angle_double_right.svg';
import {DOUBLE_SHIFT, FIRST_VALID_DATE, SINGLE_SHIFT} from "../constants";
import {getFirstMonthDay, getNowDateWithoutTime, getShiftedOnMountDate, isEqualMonthYear} from "../utils/dateUtils";

export const MonthSwitcher = ({currentPeriod, changePeriod}) => {
  const changePeriodHandler = (shift) => {
    const newPeriod = new Date(currentPeriod.getTime());
    newPeriod.setMonth(currentPeriod.getMonth() + shift);
    changePeriod(getFirstMonthDay(newPeriod));
  }
  const rightShiftAllow = !isEqualMonthYear(currentPeriod, getNowDateWithoutTime());
  const leftShiftAllow = !isEqualMonthYear(currentPeriod, FIRST_VALID_DATE);
  console.log('currentPeriod', currentPeriod);
  console.log('minus shifted', getShiftedOnMountDate(getFirstMonthDay(getNowDateWithoutTime()), -DOUBLE_SHIFT));
  const doubleRightShiftAllow = currentPeriod.valueOf() <
    getShiftedOnMountDate(getFirstMonthDay(getNowDateWithoutTime()), -DOUBLE_SHIFT + 1).valueOf();
  const doubleLeftShiftAllow = currentPeriod.valueOf() >
    getShiftedOnMountDate(getFirstMonthDay(FIRST_VALID_DATE), DOUBLE_SHIFT - 1).valueOf();
  return (
    <div className="flex justify-between">
      <div className="w-10 flex">
        <div className="w-full flex justify-between">
          <div className="w-4 h-4">
            {doubleLeftShiftAllow && <img className="cursor-pointer" src={doubleArrowLeft} alt="double-left"
                                          onClick={() => changePeriodHandler(-DOUBLE_SHIFT)}/>}
          </div>
          <div className="w-4 h-4">
            {leftShiftAllow && <img className="cursor-pointer" src={arrowLeft} alt="left"
                                    onClick={() => changePeriodHandler(-SINGLE_SHIFT)}/>}
          </div>
        </div>
      </div>
      <p className="font-bold text-sm">
        {currentPeriod.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
      </p>
      <div className="w-10 flex">
        <div className="w-full flex justify-between">
          <div className="w-4 h-4">
            {rightShiftAllow && <img className="cursor-pointer" src={arrowRight} alt="right"
                                     onClick={() => changePeriodHandler(SINGLE_SHIFT)}/>}
          </div>
          <div className="w-4 h-4">
            {doubleRightShiftAllow && <img className="cursor-pointer" src={doubleArrowRight} alt="double-right"
                                           onClick={() => changePeriodHandler(DOUBLE_SHIFT)}/>}
          </div>
        </div>
      </div>
    </div>
  );
};
