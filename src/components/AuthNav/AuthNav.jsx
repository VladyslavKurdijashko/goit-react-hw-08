import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.navigation}>
      <NavLink to="/register" className={css.link}>
        Registration
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
