import React from 'react';

export const ShortcutItem = ({period, clickHandler}) => {
  return (
    <button
      onClick={clickHandler(period)}
    >
      {period}
    </button>
  );
};
