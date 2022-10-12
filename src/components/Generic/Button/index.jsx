import React from "react";
import { Button } from "antd";
import classes from "./Button.module.scss";

const GenButton = ({ children }) => {
  return (
    <div className={classes.container}>
      <Button size="large" type="primary" block>
        {children}
      </Button>
    </div>
  );
};

export default GenButton;
