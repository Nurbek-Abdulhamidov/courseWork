import { NavLink } from "react-router-dom";
import { pageLinks } from "../../../data/navbarData";
import classes from "../Navbar/Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>Navbar</div>
      <ul className={classes.navbar_items}>
        {pageLinks?.map(({ key, path, title }) => (
          <li key={key} className={classes.navbar_item}>
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
