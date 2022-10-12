import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { plansLinks } from "../../data/plansData";
import classes from "./about.module.scss";

export const About = () => {
  return (
    <div className={classes.plan_wrapper}>
      <div className={classes.plan_container}>
        <div className={classes.plans_block}>Reja</div>
        {plansLinks?.map(({ key, path, title }) => (
          <div className={classes.plans_block} key={key}>
            <NavLink to={path}>
              {key}.{title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
export default About;
