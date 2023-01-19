import styled from '@emotion/styled';

export const UserMenuTitle = styled.h2`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  text-align: left;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.color.primary};
`;

export const AuthNavButtonContainer = styled.div`
  display: flex;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: ${p => p.theme.space[0]};
    margin-right: ${p => p.theme.space[4]};
    margin-bottom: ${p => p.theme.space[0]};
    margin-left: ${p => p.theme.space[0]};

    padding-top: ${p => p.theme.space[0]};
    padding-right: ${p => p.theme.space[0]};
    padding-bottom: ${p => p.theme.space[0]};
    padding-left: ${p => p.theme.space[0]};

    width: ${p => p.theme.sizes.width.buttonM};
    height: ${p => p.theme.sizes.height.buttonXL};

    text-decoration: none;

    font-family: ${p => p.theme.fonts.heading};
    font-size: ${p => p.theme.fontSizes.ml}px;
    font-weight: ${p => p.theme.fontWeights.normal};

    color: ${p => p.theme.color.primary};

    border-radius: ${p => p.theme.radii.m};
    border-color: transparent;

    background-color: ${p => p.theme.color.background};

    cursor: pointer;

    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: ${p => p.theme.color.backgroundAccent};
    }
  }
`;
