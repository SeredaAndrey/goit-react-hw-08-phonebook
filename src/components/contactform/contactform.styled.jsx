import styled from '@emotion/styled';

export const ContactInputForm = styled.form`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[5]};
  padding-left: ${p => p.theme.space[0]};

  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal};

  display: flex;
  flex-direction: column;

  background-color: ${p => p.theme.color.background};
`;

export const LabelForm = styled.label`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[7]};
  margin-bottom: ${p => p.theme.space[5]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  text-align: right;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.color.secondary};
`;
