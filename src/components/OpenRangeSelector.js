import React, {useCallback} from 'react';
import './OpenRangeSelector.css'
import {Calendar} from "./Calendar";
import {Shortcuts} from "./Shortcuts";
import {
  changeMonth,
  createTwoMonthArray,
  getFirstMonthDay,
  getNowDateWithoutTime,
  isEqualMonthYear
} from "../utils/dateUtils";
import {MonthSwitcher} from "./MonthSwitcher";
import {
  DOUBLE_SHIFT_STEP,
  FIRST_VALID_DATE,
  SHIFT_DOUBLE_LEFT_CLICK,
  SHIFT_DOUBLE_RIGHT_CLICK,
  SHIFT_LEFT_CLICK,
  SHIFT_RIGHT_CLICK,
  SINGLE_SHIFT_STEP
} from "../constants";

export const OpenRangeSelector = (
  {rangeState: {startDate, endDate, period, selectStart, hoverDate}, updateRangeState, toggleIsSelectorOpen}
) => {

  const {leftSideDays, rightSideDays} = createTwoMonthArray(period);
  const leftPeriod = changeMonth(period, -1);
  const calendarClickHandler = useCallback((clickedDate) => {
    if (selectStart) {
      updateRangeState({
        startDate: clickedDate,
        endDate: clickedDate,
        selectStart: false,
      })
      ;
    } else {
      if (clickedDate.valueOf() < startDate.valueOf()) {
        updateRangeState({
          startDate: clickedDate,
          endDate: startDate,
          selectStart: true,
        })
      } else {
        updateRangeState({
          endDate: clickedDate,
          selectStart: true,
        })
      }
      toggleIsSelectorOpen()
    }
  }, [selectStart, startDate, toggleIsSelectorOpen, updateRangeState])

  const monthSwitcherClickHandler = useCallback((clickType) => {
    switch (clickType) {
      case SHIFT_LEFT_CLICK: {
        const newPeriod = changeMonth(period, -SINGLE_SHIFT_STEP);
        updateRangeState({
          period: newPeriod,
        });
        break;
      }
      case SHIFT_RIGHT_CLICK: {
        const newPeriod = changeMonth(period, SINGLE_SHIFT_STEP);
        updateRangeState({
          period: newPeriod,
        });
        break;
      }
      case SHIFT_DOUBLE_LEFT_CLICK: {
        const newPeriod = changeMonth(period, -DOUBLE_SHIFT_STEP);
        updateRangeState({
          period: newPeriod,
        });
        break;
      }
      case SHIFT_DOUBLE_RIGHT_CLICK: {
        const newPeriod = changeMonth(period, DOUBLE_SHIFT_STEP);
        updateRangeState({
          period: newPeriod,
        });
        break;
      }
      default:
        break;
    }
  }, [period, updateRangeState]);

  const calendarHoverHandler = useCallback((date)=>{
    updateRangeState({
      hoverDate: date,
    });
  },[updateRangeState])

  const allowedArrows = {
    rightShiftAllow: !isEqualMonthYear(period, getNowDateWithoutTime()),
    doubleRightShiftAllow: period.valueOf() <
      changeMonth(getFirstMonthDay(getNowDateWithoutTime()), -DOUBLE_SHIFT_STEP + 1).valueOf(),
    leftShiftAllow: !isEqualMonthYear(leftPeriod, FIRST_VALID_DATE),
    doubleLeftShiftAllow: leftPeriod.valueOf() >
      changeMonth(getFirstMonthDay(FIRST_VALID_DATE), DOUBLE_SHIFT_STEP - 1).valueOf(),
  }

  return <div className="open-range-selector absolute shadow-custom bg-white rounded z-10 flex justify-between">
    <div className="w-10/12 p-4 pt-6">
      <MonthSwitcher
        leftPeriod={leftPeriod}
        rightPeriod={period}
        clickHandler={monthSwitcherClickHandler}
        allowedArrows={allowedArrows}
      />
      <div className=" flex justify-between items-start">
        <Calendar
          startDate={startDate}
          endDate={endDate}
          hoverDate={hoverDate}
          selectStart={selectStart}
          days={leftSideDays}
          clickHandler={calendarClickHandler}
          hoverHandler={calendarHoverHandler}
        />
        <Calendar
          startDate={startDate}
          endDate={endDate}
          hoverDate={hoverDate}
          selectStart={selectStart}
          days={rightSideDays}
          clickHandler={calendarClickHandler}
          hoverHandler={calendarHoverHandler}
        />
      </div>
    </div>
    <Shortcuts
      updateRangeState={updateRangeState}
      toggleIsSelectorOpen={toggleIsSelectorOpen}
    />
  </div>;
};

