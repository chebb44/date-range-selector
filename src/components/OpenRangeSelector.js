import React from 'react';
import './OpenRangeSelector.css'
import {Calendar} from "./Calendar";
import {Shortcuts} from "./Shortcuts";
import {END_CALENDAR, START_CALENDAR} from "../constants";

export const OpenRangeSelector = ({rangeState, updateRangeState}) => {

  return (
    <div className="open-range-selector absolute shadow-custom bg-white rounded z-10 p-4 pt-0 flex justify-between items-start">
      <Calendar
        rangeState={rangeState}
        updateRangeState={updateRangeState}
        type={START_CALENDAR}
      />
      <Calendar
        rangeState={rangeState}
        updateRangeState={updateRangeState}
        type={END_CALENDAR}
      />
      <Shortcuts/>
    </div>
  );
};

