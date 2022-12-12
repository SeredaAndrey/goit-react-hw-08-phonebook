import styled from '@emotion/styled';

export const AppContainer = styled.div`
  width: ${p => p.theme.sizes.width.container};
  height: ${p => p.theme.sizes.height.container};

  margin-top: ${p => p.theme.space[5]};
  margin-right: ${p => p.theme.space[9]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[9]};

  border-radius: ${p => p.theme.radii.normal};
`;
export const AppTitle = styled.h1`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[0]};

  border-top-left-radius: ${p => p.theme.radii.ml};
  border-top-right-radius: ${p => p.theme.radii.ml};

  background-color: ${p => p.theme.color.backgroundAccent};

  text-align: center;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.color.primary};
`;

export const ContactTitle = styled.h2`
  margin-top: ${p => p.theme.space[5]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[0]};

  border-top-left-radius: ${p => p.theme.radii.ml};
  border-top-right-radius: ${p => p.theme.radii.ml};

  background-color: ${p => p.theme.color.backgroundAccent};

  text-align: center;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.color.primary};
`;
