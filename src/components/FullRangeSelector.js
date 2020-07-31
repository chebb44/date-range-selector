import React, {useCallback} from 'react';
import './FullRangeSelector.css';
import {Grid} from '@material-ui/core'
import {Calendar} from "./Calendar";
import {Shortcuts} from "./Shortcuts";
import {
  createTwoMonthArray,
  getFirstMonthDay,
  getNewDateWithChangeMonth,
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

export const FullRangeSelector = (
  {rangeState, updateRangeState, toggleIsSelectorOpen}
) => {

  const {leftSideDays, rightSideDays} = createTwoMonthArray(rangeState.period);
  const leftPeriod = getNewDateWithChangeMonth(rangeState.period, -1);
  const calendarClickHandler = useCallback((clickedDate) => {
    if (rangeState.selectStart) {
      updateRangeState({
        startDate: clickedDate,
        endDate: clickedDate,
        selectStart: false,
      });
    } else {
      if (clickedDate.valueOf() < rangeState.startDate.valueOf()) {
        updateRangeState({
          startDate: clickedDate,
          endDate: rangeState.startDate,
          selectStart: true,
        });
      } else {
        updateRangeState({
          endDate: clickedDate,
          selectStart: true,
        })
      }
      toggleIsSelectorOpen()
    }
  }, [rangeState, toggleIsSelectorOpen, updateRangeState])

  const monthSwitcherClickHandler = useCallback((clickType) => {
    switch (clickType) {
      case SHIFT_LEFT_CLICK: {
        const newPeriod = getNewDateWithChangeMonth(rangeState.period, -SINGLE_SHIFT_STEP);
        updateRangeState({
          period: newPeriod,
        });
        break;
      }
      case SHIFT_RIGHT_CLICK: {
        const newPeriod = getNewDateWithChangeMonth(rangeState.period, SINGLE_SHIFT_STEP);
        updateRangeState({
          period: newPeriod,
        });
        break;
      }
      case SHIFT_DOUBLE_LEFT_CLICK: {
        const newPeriod = getNewDateWithChangeMonth(rangeState.period, -DOUBLE_SHIFT_STEP);
        updateRangeState({
          period: newPeriod,
        });
        break;
      }
      case SHIFT_DOUBLE_RIGHT_CLICK: {
        const newPeriod = getNewDateWithChangeMonth(rangeState.period, DOUBLE_SHIFT_STEP);
        updateRangeState({
          period: newPeriod,
        });
        break;
      }
      default:
        break;
    }
  }, [rangeState, updateRangeState]);

  const calendarHoverHandler = useCallback((date) => {
    updateRangeState({
      hoverDate: date,
    });
  }, [updateRangeState])

  const allowedMonthSwitcherArrows = {
    rightShiftAllow: !isEqualMonthYear(rangeState.period, getNowDateWithoutTime()),
    doubleRightShiftAllow: rangeState.period.valueOf() <
      getNewDateWithChangeMonth(getFirstMonthDay(getNowDateWithoutTime()), -DOUBLE_SHIFT_STEP + 1).valueOf(),
    leftShiftAllow: !isEqualMonthYear(leftPeriod, FIRST_VALID_DATE),
    doubleLeftShiftAllow: leftPeriod.valueOf() >
      getNewDateWithChangeMonth(getFirstMonthDay(FIRST_VALID_DATE), DOUBLE_SHIFT_STEP - 1).valueOf(),
  }

  return <div className="open-range-selector absolute shadow-custom bg-white rounded z-10">
    <Grid container className="h-full">
      <Grid item xs={9} className="p-4 pt-6">
        <MonthSwitcher
          leftPeriod={leftPeriod}
          rightPeriod={rangeState.period}
          clickHandler={monthSwitcherClickHandler}
          allowedArrows={allowedMonthSwitcherArrows}
        />
        <div className=" flex justify-between items-start">
          <Calendar
            rangeState={rangeState}
            days={leftSideDays}
            clickHandler={calendarClickHandler}
            hoverHandler={calendarHoverHandler}
          />
          <Calendar
            rangeState={rangeState}
            days={rightSideDays}
            clickHandler={calendarClickHandler}
            hoverHandler={calendarHoverHandler}
          />
        </div>
      </Grid>
      <Grid container item xs={3}>
        <Shortcuts
          updateRangeState={updateRangeState}
          toggleIsSelectorOpen={toggleIsSelectorOpen}
        />
      </Grid>
    </Grid>
  </div>;
};

