import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";

import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const location = useLocation();
  const isContactsPage = location.pathname === "/contacts";

  return (
    <header className={css.headerNav}>
      <nav className={css.navLinks}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        {/* Display the Contacts link only if the user is logged in */}
        {isLoggedIn && !isContactsPage && (
          <NavLink to="/contacts" className={css.navLink}>
            Contacts
          </NavLink>
        )}
      </nav>

      <div className={css.authNav}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
