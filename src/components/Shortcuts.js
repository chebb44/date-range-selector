import React, {useCallback} from 'react';
import {
  FIRST_VALID_DATE,
  LAST_30_DAYS,
  LAST_7_DAYS,
  LAST_MONTH,
  LIFETIME,
  THIS_MONTH,
  THIS_YEAR,
  TODAY,
  YESTERDAY
} from "../constants";
import {ShortcutItem} from "./ShortcutItem";
import {getNowDateWithoutTime} from "../utils/dateUtils";

export const Shortcuts = ({rangeState, updateRangeState}) => {
  const buttons = [TODAY, YESTERDAY, LAST_7_DAYS, LAST_30_DAYS, THIS_MONTH, LAST_MONTH, THIS_YEAR, LIFETIME];

  const periodButtonClickHandler = useCallback((period) => {
    const newEndDate = getNowDateWithoutTime();
    switch (period) {
      case TODAY: {
        updateRangeState({
          startDate: newEndDate,
          startPeriod: newEndDate,
          endDate: newEndDate,
          endPeriod: newEndDate
        });
        break;
      }
      case YESTERDAY: {
        const newStartDate = new Date(newEndDate.getTime());
        newStartDate.setDate(newEndDate.getDate() - 1);
        updateRangeState({
          startDate: newStartDate,
          startPeriod: newStartDate,
          endDate: newStartDate,
          endPeriod: newStartDate
        });
        break;
      }
      case LAST_7_DAYS: {
        const newStartDate = new Date(newEndDate.getTime());
        newStartDate.setDate(newEndDate.getDate() - 6);
        updateRangeState({
          startDate: newStartDate,
          startPeriod: newStartDate,
          endDate: newEndDate,
          endPeriod: newEndDate
        });
        break;
      }
      case LAST_30_DAYS: {
        const newStartDate = new Date(newEndDate.getTime());
        newStartDate.setDate(newEndDate.getDate() - 30);
        updateRangeState({
          startDate: newStartDate,
          startPeriod: newStartDate,
          endDate: newEndDate,
          endPeriod: newEndDate
        });
        break;
      }
      case THIS_MONTH: {
        const newStartDate = new Date(newEndDate.getTime());
        newStartDate.setDate(1);
        updateRangeState({
          startDate: newStartDate,
          startPeriod: newStartDate,
          endDate: newEndDate,
          endPeriod: newEndDate
        });
        break;
      }
      case LAST_MONTH: {
        const newEndDate = getNowDateWithoutTime();
        newEndDate.setDate(0);
        console.log('newEndDate', newEndDate);
        const newStartDate = new Date(newEndDate.getTime());
        newStartDate.setDate(1);
        console.log('newStartDate', newStartDate);
        updateRangeState({
          startDate: newStartDate,
          startPeriod: newStartDate,
          endDate: newEndDate,
          endPeriod: newEndDate
        });
        break;
      }
      case THIS_YEAR: {
        const newStartDate = new Date(newEndDate.getTime());
        newStartDate.setMonth(0);
        newStartDate.setDate(1);
        updateRangeState({
          startDate: newStartDate,
          startPeriod: newStartDate,
          endDate: newEndDate,
          endPeriod: newEndDate
        });
        break;
      }
      case LIFETIME: {
        const newStartDate = FIRST_VALID_DATE;
        updateRangeState({
          startDate: newStartDate,
          startPeriod: newStartDate,
          endDate: newEndDate,
          endPeriod: newEndDate
        });
        break;
      }
      default:
        break;
    }
  }, [updateRangeState]);
  return (
    <div className="w-1/5 flex flex-grow-0 flex-col justify-between items-start pl-6 pt-2 pb-2 border-l h-full">
      {
        buttons.map(period => {
          return <ShortcutItem
            key={period}
            period={period}
            clickHandler={periodButtonClickHandler}
          />
        })
      }
    </div>
  );
};
