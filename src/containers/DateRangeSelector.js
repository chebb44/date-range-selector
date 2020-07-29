import React, {useCallback, useState} from 'react';
import {CollapsedRangeSelector} from "../components/CollapsedRangeSelector";
import {OpenRangeSelector} from "../components/OpenRangeSelector";
import {getNowDateWithoutTime} from "../utils/dateUtils";

export const DateRangeSelector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(true);
  const [rangeState, setRangeState] = useState({
    startPeriod: getNowDateWithoutTime(),
    endPeriod: getNowDateWithoutTime(),
    startDate: getNowDateWithoutTime(),
    endDate: getNowDateWithoutTime(),
  });
  
  const updateRangeState = useCallback((data)=>{
    setRangeState({...rangeState, ...data});
  },[rangeState])

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
