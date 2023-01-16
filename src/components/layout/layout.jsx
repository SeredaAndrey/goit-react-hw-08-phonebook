import AppBar from 'components/appbar/appbar';
import { Outlet } from 'react-router-dom';

import { LayoutContainer } from './layout.styled';

export const Layout = () => {
  return (
    <nav>
      <LayoutContainer>
        <AppBar />
        <Outlet />
      </LayoutContainer>
    </nav>
  );
};
