import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '@app/store';
import { removeUser } from '@app/features';
import { useAuth } from '@app/hooks';

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  const handleLogOut = () => {
    dispatch(removeUser());
  };

  return (
    <ul className="nav-list">
      {!isAuth && (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/registration">
              Registration
            </NavLink>
          </li>
        </>
      )}
      {isAuth && (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" end>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <button className="button-link button nav-link" onClick={handleLogOut}>
              Log Out
            </button>
          </li>
        </>
      )}
    </ul>
  );
};
