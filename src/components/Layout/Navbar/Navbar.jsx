import { NavLink } from "react-router-dom";
import { pageLinks } from "../../../data/navbarData";
import GenButton from "../../Generic/Button";
import classes from "../Navbar/Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <NavLink to="/">
          <marquee behavior="" direction="">
            Marketingni boshqarish
          </marquee>
        </NavLink>
      </div>
      <div className={classes.navbar_items}>
        {pageLinks?.map(({ key, path, title }) => (
          <NavLink to={path} key={key}>
            <GenButton>{title}</GenButton>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
