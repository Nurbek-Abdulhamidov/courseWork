import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./about.module.scss";

export const About = () => {
  return (
    <div className={classes.plan_wrapper}>
      <div className={classes.plan_container}>
        <div className={classes.plans_block}>
          <p>Reja</p>
        </div>
        <div className={classes.plans_block}>
          <NavLink to={path}>
            <p>1. Iqtisodiy tahlil mazmuni</p>
          </NavLink>
        </div>
        <div className={classes.plans_block}>
          <p>2. Iqtisodiy tahlilning predmeti</p>
        </div>
        <div className={classes.plans_block}>
          <p>3. Iqtisodiy tahlilning vazifalari</p>
        </div>
        <div className={classes.plans_block}>
          <p>4. Iqtisodiy tahlilning asosiy tamoyillari</p>
        </div>
      </div>
    </div>
  );
};
export default About;
