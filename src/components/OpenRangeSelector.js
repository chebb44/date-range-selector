import React, {useCallback} from 'react';
import './OpenRangeSelector.css'
import {Calendar} from "./Calendar";
import {Shortcuts} from "./Shortcuts";
import {createTwoMonthArray} from "../utils/dateUtils";
import {MonthSwitcher} from "./MonthSwitcher";

export const OpenRangeSelector = ({rangeState: {startDate, endDate, startPeriod, endPeriod}, updateRangeState}) => {

  const {leftSideDays, rightSideDays} = createTwoMonthArray(endPeriod);


  const calendarClickHandler = useCallback((clickedDate) => {
    console.log('clickedDate', clickedDate);
  }, [])
  const monthSwitcherClickHandler = useCallback((clickType) => {
    console.log('clickType', clickType);
  }, [])

  return <div className="open-range-selector absolute shadow-custom bg-white rounded z-10 flex justify-between">
    <div className="w-10/12 p-4 pt-6">
      <MonthSwitcher
        clickHandler={monthSwitcherClickHandler}
      />
      <div className=" flex justify-between items-start">
        <Calendar
          days={leftSideDays}
          clickHandler={calendarClickHandler}
        />
        <Calendar
          days={rightSideDays}
          clickHandler={calendarClickHandler}
        />
      </div>
    </div>
    <Shortcuts
      // rangeState={rangeState}
      // updateRangeState={updateRangeState}
    />
  </div>;
};

