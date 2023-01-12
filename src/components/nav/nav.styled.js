import styled from '@emotion/styled';

export const NavTitle = styled.h2`
  margin-top: ${p => p.theme.space[5]};
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.sizes.width.container};

  border-top-left-radius: ${p => p.theme.radii.ml};
  border-top-right-radius: ${p => p.theme.radii.ml};

  background-color: ${p => p.theme.color.backgroundAccent};

  text-align: center;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.color.primary};
`;

export const NavLinkContainer = styled.div`
  display: flex;

  justify-content: space-evenly;
  text-align: center;

  margin-top: ${p => p.theme.space[0]};
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.sizes.width.container};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.color.primary};
  background-color: ${p => p.theme.color.backgroundAccent};

  text-transform: uppercase;

  > a {
    margin-top: ${p => p.theme.space[0]};
    margin-right: ${p => p.theme.space[0]};
    margin-bottom: ${p => p.theme.space[0]};
    margin-left: ${p => p.theme.space[0]};

    padding-top: ${p => p.theme.space[0]};
    padding-right: ${p => p.theme.space[5]};
    padding-bottom: ${p => p.theme.space[0]};
    padding-left: ${p => p.theme.space[5]};

    text-decoration: none;

    color: ${p => p.theme.color.primary};

    border-top-left-radius: ${p => p.theme.radii.m};
    border-top-right-radius: ${p => p.theme.radii.m};

    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .active {
    background-color: ${p => p.theme.color.background};
    color: ${p => p.theme.color.secondary};
  }
  &:hover :not(.active) {
    color: blue;
  }
`;
