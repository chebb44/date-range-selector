import React, {useCallback, useState} from 'react';
import {CollapsedRangeSelector} from "../components/CollapsedRangeSelector";
import {OpenRangeSelector} from "../components/OpenRangeSelector";
import {getNowDateWithoutTime} from "../utils/dateUtils";
import {FIRST_VALID_DATE} from "../constants";

export const DateRangeSelector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [rangeState, setRangeState] = useState({
    startPeriod: getNowDateWithoutTime(),
    endPeriod: getNowDateWithoutTime(),
    startDate: getNowDateWithoutTime(),
    endDate: getNowDateWithoutTime(),
  });

  const validateRangeState = (state) => {
    const today = getNowDateWithoutTime();
    return state.startDate.valueOf() >= FIRST_VALID_DATE.valueOf() &&
      state.startPeriod.valueOf() >= FIRST_VALID_DATE.valueOf() &&
      state.endPeriod.valueOf() >= FIRST_VALID_DATE.valueOf() &&
      state.endDate.valueOf() >= FIRST_VALID_DATE.valueOf() &&
      state.startPeriod.valueOf() <= today.valueOf() &&
      state.endPeriod.valueOf() <= today.valueOf() &&
      state.startDate.valueOf() <= today.valueOf() &&
      state.endDate.valueOf() <= today.valueOf() &&
      state.startDate.valueOf() <= state.endDate.valueOf();
  }

  const updateRangeState = useCallback((data) => {
    const newRangeState = {...rangeState, ...data};
    if (validateRangeState(newRangeState)) {
      setRangeState({...rangeState, ...data});
    }
  }, [rangeState]);

  const toggleIsSelectorOpen = useCallback(() => {
    setIsSelectorOpen(!isSelectorOpen);
  }, [isSelectorOpen])
  return (
    <div className="date-range-selector">
      <CollapsedRangeSelector
        toggleIsSelectorOpen={toggleIsSelectorOpen}
        rangeState={rangeState}
        updateRangeState={updateRangeState}
      />
      {isSelectorOpen && <OpenRangeSelector
        rangeState={rangeState}
        updateRangeState={updateRangeState}
      />}
    </div>
  );
};
