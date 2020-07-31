import React, {useCallback} from 'react';
import {Grid} from '@material-ui/core'
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
import {getFirstMonthDay, getNewDateWithChangeDay, getNowDateWithoutTime} from "../utils/dateUtils";

export const Shortcuts = ({updateRangeState, toggleIsSelectorOpen}) => {
  const buttons = [
    TODAY,
    YESTERDAY,
    LAST_7_DAYS,
    LAST_30_DAYS,
    THIS_MONTH,
    LAST_MONTH,
    THIS_YEAR,
    LIFETIME
  ];

  const periodButtonClickHandler = useCallback((period) => {
    const newEndDate = getNowDateWithoutTime();
    switch (period) {
      case TODAY: {
        updateRangeState({
          startDate: newEndDate,
          endDate: newEndDate,
          period: getFirstMonthDay(newEndDate)
        });
        break;
      }
      case YESTERDAY: {
        const newDate = getNewDateWithChangeDay(newEndDate, -1)
        updateRangeState({
          startDate: newDate,
          endDate: newDate,
          period: getFirstMonthDay(newDate)
        });
        break;
      }
      case LAST_7_DAYS: {
        const newStartDate = getNewDateWithChangeDay(newEndDate, -6);
        updateRangeState({
          startDate: newStartDate,
          endDate: newEndDate,
          period: getFirstMonthDay(newEndDate)
        });
        break;
      }
      case LAST_30_DAYS: {
        const newStartDate = getNewDateWithChangeDay(newEndDate, -29);
        updateRangeState({
          startDate: newStartDate,
          endDate: newEndDate,
          period: getFirstMonthDay(newEndDate)
        });
        break;
      }
      case THIS_MONTH: {
        const newStartDate = getFirstMonthDay(newEndDate);
        updateRangeState({
          startDate: newStartDate,
          endDate: newEndDate,
          period: getFirstMonthDay(newEndDate)
        });
        break;
      }
      case LAST_MONTH: {
        const newEndDate = getNowDateWithoutTime();
        newEndDate.setDate(0);
        const newStartDate = new Date(newEndDate.getTime());
        newStartDate.setDate(1);
        updateRangeState({
          startDate: newStartDate,
          endDate: newEndDate,
          period: getFirstMonthDay(newEndDate)
        });
        break;
      }
      case THIS_YEAR: {
        const newStartDate = new Date(newEndDate.getTime());
        newStartDate.setMonth(0);
        newStartDate.setDate(1);
        updateRangeState({
          startDate: newStartDate,
          endDate: newEndDate,
          period: getFirstMonthDay(newEndDate)
        });
        break;
      }
      case LIFETIME: {
        updateRangeState({
          startDate: FIRST_VALID_DATE,
          endDate: newEndDate,
          period: getFirstMonthDay(newEndDate)
        });
        break;
      }
      default:
        break;
    }
    toggleIsSelectorOpen();
  }, [toggleIsSelectorOpen, updateRangeState]);
  return (
    <Grid container direction="column" justify="space-between" alignItems="flex-start"
          className="pl-8 pt-2 pb-2 border-l"
      >
      {
        buttons.map(period => {
          return <ShortcutItem
            key={period}
            period={period}
            clickHandler={periodButtonClickHandler}
          />
        })
      }
    </Grid>
  );
};
