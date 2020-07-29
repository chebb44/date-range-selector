import React from 'react';
import arrowLeft from '../assets/ic_angle-left.svg';
import doubleArrowLeft from '../assets/ic_angle_double_left.svg';
import arrowRight from '../assets/ic_angle-right.svg';
import doubleArrowRight from '../assets/ic_angle_double_right.svg';

export const MonthSwitcher = ({date}) => {
  return (
    <div className="flex justify-between">
      <div className="w-12 flex">
        <div className="flex">
          <img src={arrowLeft} alt="left"/>
          <img src={doubleArrowLeft} alt="double-left"/>
        </div>
      </div>
      <p>
        {date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}
      </p>
      <div className="w-12 flex">
        <div className="flex">
          <img src={arrowRight} alt="right"/>
          <img src={doubleArrowRight} alt="double-right"/>
        </div>
      </div>
    </div>
  );
};
