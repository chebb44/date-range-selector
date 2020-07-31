import React from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

export const ShortcutItem = ({period, clickHandler}) => {
  const styles = makeStyles({
    button: {
      fontSize: "small",
      textTransform: "none",
      '&:hover': {
        background: '#f6ad55',
        color: '#FFF',
      }
    }
  });
  const classes = styles();
  return (
    <Button
      className={classes.button}
      onClick={() => clickHandler(period)}
    >
      {period}
    </Button>
  );
};
