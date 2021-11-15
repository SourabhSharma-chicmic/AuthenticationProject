import { Link ,useHistory} from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { IdTokenn } from "../ContextAPI/IdToken";
import { useContext } from "react";

const MainNavigation = () => {
  const history = useHistory();
  const [idToken, setIdToken] = useContext(IdTokenn);

  const logoutHandler = () => {
    setIdToken({ id: "", bool: false });

    history.replace('/auth');
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {idToken.bool ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          ) : 
            <li>
              <Link to="/auth">Login</Link>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
