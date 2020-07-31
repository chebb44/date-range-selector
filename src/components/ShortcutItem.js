import React from 'react';
import Button from "@material-ui/core/Button";

export const ShortcutItem = ({period, clickHandler}) => {
  return (
    <Button
      size="small"
      className="text-sm focus:outline-none"
      onClick={() => clickHandler(period)}
    >
      {period}
    </Button>
  );
};
