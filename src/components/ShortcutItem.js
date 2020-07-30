import React from 'react';

export const ShortcutItem = ({period, clickHandler}) => {
  return (
    <span className="font-bold text-xs p-1 m-1 cursor-pointer"
      onClick={() => clickHandler(period)}
    >
      {period}
    </span>
  );
};
