import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { logOut } from 'src/services/firebase';
import { selectAuth } from 'store/profile/selectors';
import { changeAuth } from 'store/profile/slice';

const navigate = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },
  {
    id: 3,
    to: '/chats',
    name: 'Chats',
  },
  {
    id: 4,
    to: '/about',
    name: 'About',
  },
  {
    id: 5,
    name: 'Articles',
    to: '/articles',
  },
];

export const Header: FC = () => {
  const auth = useSelector(selectAuth);
  const [error, setError] = useState('');

  const handleSignOut = async () => {
    setError('');
    try {
      await logOut();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <header>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        {navigate.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.to}
              style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {auth ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <>
          <Link to="/signin">SingIn</Link> | <Link to="/signup">SingUp</Link>
        </>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <main>
        <Outlet />
      </main>
    </header>
  );
};
