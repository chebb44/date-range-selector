import React from 'react';
import './OpenRangeSelector.css'
import {Calendar} from "./Calendar";
import {Shortcuts} from "./Shortcuts";

export const OpenRangeSelector = () => {

  return (
    <div className="open-range-selector absolute shadow-custom bg-white rounded z-20 flex">
      <Calendar
      />
      {/*<Calendar*/}
      {/*/>*/}
      <Shortcuts/>
    </div>
  );
};
