import { Nav } from 'components/nav/nav';

import { LayoutContainer } from './layout.styled';

export const Layout = () => {
  return (
    <nav>
      <LayoutContainer>
        <Nav />
        {/* <ContactList /> */}
      </LayoutContainer>
    </nav>
  );
};
