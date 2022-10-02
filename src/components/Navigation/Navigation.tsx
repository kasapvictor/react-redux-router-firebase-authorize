import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch } from '@app/store';
import { removeUser } from '@app/features';
import { useAuth } from '@app/hooks';
import { Button } from '@app/components';

import { Nav, NavItem } from './styled';

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();

  const handleLogOut = () => {
    dispatch(removeUser());
    toast.success('Goodbye', { theme: 'dark' });
  };

  return (
    <Nav>
      {!isAuth && (
        <>
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/registration">Registration</NavLink>
          </NavItem>
        </>
      )}
      {isAuth && (
        <>
          <NavItem>
            <NavLink to="/" end>
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <Button type="button" onClick={handleLogOut}>
              Log Out
            </Button>
          </NavItem>
        </>
      )}
    </Nav>
  );
};
