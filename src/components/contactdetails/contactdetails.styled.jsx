import styled from '@emotion/styled';

export const ContactDetailsContainer = styled.div`
  display: flex;

  flex-direction: column;

  margin-top: ${p => p.theme.space[0]};
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.sizes.width.container};

  border-bottom-left-radius: ${p => p.theme.radii.ml};
  border-bottom-right-radius: ${p => p.theme.radii.ml};

  align-items: center;

  background-color: ${p => p.theme.color.background};

  display: flex;
  justify-content: center;

  min-height: ${p => p.theme.sizes.height.friendsItem};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.color.primary};

  background-color: ${p => p.theme.color.background};
`;
export const ContactAvatar = styled.img`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  height: ${p => p.theme.sizes.height.avatar};
`;

export const ContactDetailsName = styled.h3`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ContactDetailsTelephone = styled.p`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};
`;
export const BackButon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.sizes.width.buttonIco};
  height: ${p => p.theme.sizes.height.buttonIco};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.color.primary};

  border-color: transparent;
  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => p.theme.color.background};

  cursor: pointer;

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.color.backgroundAccent};
  }
`;
