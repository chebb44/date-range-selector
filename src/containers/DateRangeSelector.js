import React, {useCallback, useState} from 'react';
import {CollapsedRangeSelector} from "../components/CollapsedRangeSelector";
import {FullRangeSelector} from "../components/FullRangeSelector";
import {getFirstMonthDay, getNowDateWithoutTime, getSiblingMonth} from "../utils/dateUtils";
import {FIRST_VALID_DATE} from "../constants";

export const DateRangeSelector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [rangeState, setRangeState] = useState({
    period: getFirstMonthDay(getNowDateWithoutTime()),
    startDate: getFirstMonthDay(getNowDateWithoutTime()),
    endDate: getNowDateWithoutTime(),
    selectStart: true,
    hoverDate: null,
  });

  const validateRangeState = (state) => {
    const today = getNowDateWithoutTime();

    const isStartDateValid = state.startDate ?
      state.startDate?.valueOf() >= FIRST_VALID_DATE.valueOf() &&
      state.startDate?.valueOf() <= today.valueOf() : true;

    const isEndDateValid = state.endDate ?
      state.endDate?.valueOf() >= FIRST_VALID_DATE.valueOf() &&
      state.endDate?.valueOf() <= today.valueOf() &&
      state.endDate?.valueOf() >= state.startDate.valueOf() : true;

    const isPeriodValid = state.period.valueOf() <= getFirstMonthDay(today).valueOf() &&
      state.period.valueOf() >= getFirstMonthDay(FIRST_VALID_DATE).valueOf();

    return (isStartDateValid && isEndDateValid && isPeriodValid);
  }

  const updateRangeState = useCallback((newData) => {
    const newRangeState = {...rangeState, ...newData};
    if (validateRangeState(newRangeState)) {
      setRangeState(newRangeState);
    }
  }, [rangeState]);

  const toggleIsSelectorOpen = useCallback(() => {
    setIsSelectorOpen(!isSelectorOpen);
  }, [isSelectorOpen])

  const shiftRangeHandler = useCallback((direction) => {
    let {startDate: newStartDate, endDate: newEndDate} = getSiblingMonth(rangeState.endDate, direction);
    if (newEndDate.valueOf() > getNowDateWithoutTime().valueOf()) newEndDate = getNowDateWithoutTime();
    if (newStartDate.valueOf() < FIRST_VALID_DATE.valueOf()) newStartDate = FIRST_VALID_DATE;
    updateRangeState({
      startDate: newStartDate,
      endDate: newEndDate,
      period: getFirstMonthDay(newEndDate),
    });
  }, [rangeState.endDate, updateRangeState])

  return (
    <div className="date-range-selector">
      <CollapsedRangeSelector
        toggleIsSelectorOpen={toggleIsSelectorOpen}
        rangeState={rangeState}
        arrowsClickHandler={shiftRangeHandler}
      />
      {isSelectorOpen && <FullRangeSelector
        rangeState={rangeState}
        updateRangeState={updateRangeState}
        toggleIsSelectorOpen={toggleIsSelectorOpen}
      />}
    </div>
  );
};
