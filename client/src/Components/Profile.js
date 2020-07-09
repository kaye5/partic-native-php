import React from "react";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Auth from "../Modules/Auth";
import { Link } from "react-router-dom";

export default function Profile() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [login, setLogin] = React.useState(false);
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  
  React.useEffect(() => {
    if (Auth.isUserAuthenticated()) {
      setLogin(true);
    } else setLogin(false);
    // eslint-disable-next-line
  }, [Auth.isUserAuthenticated()]);

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  function renderIsLogin() {
    if (!login)
      return (
        <React.Fragment>
          <Link
            to={{
              pathname: "/login",
              state: {
                prev: window.location.pathname
              }
            }}
          >
            <span className="dropdown-item">Login</span>
          </Link>
          <Link
            to={{
              pathname: "/register",
              state: {
                prev: window.location.pathname
              }
            }}
          >
            <span className="dropdown-item">Sign up</span>
          </Link>
        </React.Fragment>
      );
    else
      return (
        <React.Fragment>
          <a className="dropdown-item" href="/profile/setting">
            Account Setting
          </a>
          <a className="dropdown-item" href="/profile/ticket">
            Ticket
          </a>
          <a className="dropdown-item" href="/events/create">
            Create Event
          </a>
          <a className="dropdown-item" href="/events/my">
            My Events{" "}
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/logout" style={{ color: "red" }}>
            Logout
          </a>
        </React.Fragment>
      );
  }
  return (
    <div>
      <span
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <i
          className="fa fa-user-circle"
          style={{ color: "black", fontSize: "1.5rem" }}
        ></i>
      </span>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement="left-end"
      >
        <Paper onClick={handleClose}>{renderIsLogin()}</Paper>
      </Popper>
    </div>
  );
}
