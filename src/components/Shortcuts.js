import React, {useCallback} from 'react';
import {LAST_30_DAYS, LAST_7_DAYS, LAST_MONTH, LIFETIME, THIS_YEAR, TODAY, YESTERDAY} from "../constants";
import {ShortcutItem} from "./ShortcutItem";

export const Shortcuts = () => {
  const buttons = [TODAY, YESTERDAY, LAST_7_DAYS, LAST_30_DAYS, LAST_MONTH, THIS_YEAR, LIFETIME];
  const periodButtonClickHandler = useCallback((period) => () => {
    console.log('period', period);
  }, []);
  return (
    <div className="w-1/5 flex flex-col justify-between items-start p-6 border-l">
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
