import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AboutWithConnect } from '../pages/About';
import { Chats } from '../pages/Chats/Chats';
import { Header } from './Header';
import { Home } from '../pages/Home';
// import { Profile } from '../pages/Profile';
import { ChatList } from './ChatList';
import { Articles } from '../pages/Articles';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Profile = React.lazy(() =>
  Promise.all([
    import('../pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports)
);

export const AppRouter: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="profile"
            element={<PrivateRoute component={<Profile />} />}
          />

          <Route path="chats" element={<PrivateRoute />}>
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<Chats />} />
          </Route>

          <Route path="about" element={<AboutWithConnect />} />
          <Route path="articles" element={<Articles />} />
          <Route
            path="signin"
            element={<PublicRoute component={<SignIn />} />}
          />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);
