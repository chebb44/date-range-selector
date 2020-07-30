import React from 'react';
import arrowLeft from '../assets/ic_angle-left.svg';
import doubleArrowLeft from '../assets/ic_angle_double_left.svg';
import arrowRight from '../assets/ic_angle-right.svg';
import doubleArrowRight from '../assets/ic_angle_double_right.svg';

export const MonthSwitcher = ({clickHandler}) => {
  // const changePeriodHandler = (shift) => {
  //   const newPeriod = new Date(currentPeriod.getTime());
  //   newPeriod.setMonth(currentPeriod.getMonth() + shift);
  //   changePeriod(getFirstMonthDay(newPeriod));
  // }
  // const rightShiftAllow = !isEqualMonthYear(currentPeriod, getNowDateWithoutTime());
  // const leftShiftAllow = !isEqualMonthYear(currentPeriod, FIRST_VALID_DATE);
  // const doubleRightShiftAllow = currentPeriod.valueOf() <
  //   getShiftedOnMountDate(getFirstMonthDay(getNowDateWithoutTime()), -DOUBLE_SHIFT + 1).valueOf();
  // const doubleLeftShiftAllow = currentPeriod.valueOf() >
  //   getShiftedOnMountDate(getFirstMonthDay(FIRST_VALID_DATE), DOUBLE_SHIFT - 1).valueOf();
  const doubleLeftShiftAllow = true;
  const leftShiftAllow = true;
  const rightShiftAllow = true;
  const doubleRightShiftAllow = true;
  return (
    <div className="flex justify-between ml-5 mr-5">
      <div className="flex items-center justify-between">
        <div className="w-24 flex justify-start">
          <div className="w-4 h-4">
            {doubleLeftShiftAllow && <img className="cursor-pointer" src={doubleArrowLeft} alt="double-left"
                                          onClick={() => {
                                          }}/>}
          </div>
          <div className="w-4 h-4">
            {leftShiftAllow && <img className="cursor-pointer" src={arrowLeft} alt="left"
                                    onClick={() => {
                                    }}/>}
          </div>
        </div>
        <p className="font-bold text-sm">
          {new Date().toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-sm">
          {new Date().toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
        </p>
        <div className="w-24 flex justify-end">
          <div className="w-4 h-4">
            {rightShiftAllow && <img className="cursor-pointer" src={arrowRight} alt="right"
                                     onClick={() => {
                                     }}/>}
          </div>
          <div className="w-4 h-4">
            {doubleRightShiftAllow && <img className="cursor-pointer" src={doubleArrowRight} alt="double-right"
                                           onClick={() => {
                                           }}/>}
          </div>
        </div>
      </div>
    </div>
  );
};
