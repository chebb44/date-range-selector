import React from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

export const ShortcutItem = ({period, clickHandler}) => {
  const styles = makeStyles({
    button: {
      fontSize: "small",
    }
  })
  const classes = styles();
  return (
    <Button
      size="small"
      className={classes.button}
      onClick={() => clickHandler(period)}
    >
      {period}
    </Button>
  );
};
