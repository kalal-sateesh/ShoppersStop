import styles from "./AppHeader.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import route from "../../routes/route.json";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import { ThemeContext } from "../../contexts/ThemeContext";

const AppHeader = () => {
  const data = useSelector((state) => state.cart.data);

  const navigate = useNavigate();

  const { isAuth, logoutHandler } = useContext(AuthContext);

  const { lightToDarkHandler, darkToLightHandler, isDark } =
    useContext(ThemeContext);

  const iconClasses = isDark
    ? "bi bi-brightness-high-fill text-white"
    : "bi bi-moon-fill text-white";

  const {
    userData: { userName = "" },
  } = useContext(UserContext);

  const linkStyleHandelr = ({ isActive }) =>
    isActive ? styles.navActive : styles.nav;

  return (
    // <header className={styles.header}>
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "white" }}
    >
      <Navbar.Brand className={`fs-4 `}>
        <NavLink to={route.HOME} className={styles.shop}>
          Shoppers Stop
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink to={route.HOME} className={linkStyleHandelr}>
            HOME
          </NavLink>
          <NavLink to={route["MENS'S_CLOTHING"]} className={linkStyleHandelr}>
            MENS
          </NavLink>
          <NavLink to={route["WOME'S_CLOTHING"]} className={linkStyleHandelr}>
            WOMENS
          </NavLink>
          <NavLink to={route.ELECTRONICS} className={linkStyleHandelr}>
            ELECTRONICS
          </NavLink>
          <NavLink to={route.JWELLERY} className={linkStyleHandelr}>
            JEWELLERY
          </NavLink>
          <NavLink to={route.ABOUT} className={linkStyleHandelr}>
            ABOUT
          </NavLink>
          <NavLink to={route.CONTACT_US} className={linkStyleHandelr}>
            CONTACTUS
          </NavLink>
        </Nav>
        <Nav className="me-3">
          <Nav.Link className={styles.button}>
            <Button
              onClick={isDark ? darkToLightHandler : lightToDarkHandler}
              className="me-2"
              variant="secondary"
            >
              <i className={iconClasses}></i>
            </Button>
            {!isAuth && (
              <>
                <Button
                  onClick={() => navigate(route.LOGIN)}
                  variant="secondary"
                  className="me-2"
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate("signup")}
                  variant="secondary"
                  className="me-2"
                >
                  Signup
                </Button>
              </>
            )}
            {isAuth && (
              <Button
                onClick={logoutHandler}
                variant="secondary"
                className="me-2"
              >
                Logout
              </Button>
            )}
            {userName && (
              <Button variant="secondary" className="me-2">
                <i className="bi bi-person-fill me-2"></i>
                {userName}
              </Button>
            )}

            <NavLink to={route.CART}>
              <Button variant="secondary">
                <i className="bi bi-cart  me-3"></i>
                <span className="fw-bold text-warning">{data.length}</span>
              </Button>
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // </header>
  );
};
export default AppHeader;
