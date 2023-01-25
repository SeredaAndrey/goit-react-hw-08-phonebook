import styled from '@emotion/styled';

export const ContactListPrimaryContainer = styled.div`
  display: flex;

  margin-top: ${p => p.theme.space[0]};
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.sizes.width.container};
`;

export const ContactListContainer = styled.ul`
  display: flex;
  flex-direction: column;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.sizes.width.semicontainer};
`;

export const ContactListMesage = styled.p`
  display: flex;

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.sizes.width.semicontainer};

  border-radius: ${p => p.theme.radii.ml};

  height: ${p => p.theme.sizes.height.friendsItem};

  align-items: center;
  justify-content: center;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.color.primary};

  background-color: ${p => p.theme.color.background};
`;
