import React from "react";
import { NavLink } from "react-router-dom";
import { plansLinks } from "../../data/plansData";
import classes from "./about.module.scss";

export const About = () => {
  return (
    <div className={classes.plan_wrapper}>
      <div className={classes.plan_container}>
        {plansLinks?.map(({ key, path, title }) => (
          <div className={classes.plans_block} key={key}>
            <NavLink to={path}>{title}</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
