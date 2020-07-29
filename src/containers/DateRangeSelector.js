import React, {useCallback, useState} from 'react';
import {CollapsedRangeSelector} from "../components/CollapsedRangeSelector";
import {OpenRangeSelector} from "../components/OpenRangeSelector";

export const DateRangeSelector = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(true);
  const toggleIsSelectorOpen = useCallback(() => {
    setIsSelectorOpen(!isSelectorOpen);
  }, [isSelectorOpen])
  const shiftLeftCallback = () => {
    console.log('shift left')
  }
  const shiftRightCallback = () => {
    console.log('shift right')
  }
  return (
    <div className="relative">
      <CollapsedRangeSelector
        toggleIsSelectorOpen={toggleIsSelectorOpen}
        shiftLeftCallback={shiftLeftCallback}
        shiftRightCallback={shiftRightCallback}
      />
      {isSelectorOpen && <OpenRangeSelector/>}
    </div>
  );
};
