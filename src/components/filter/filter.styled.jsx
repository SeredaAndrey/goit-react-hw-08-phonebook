import styled from '@emotion/styled';

export const ContactFilterForm = styled.label`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[0]};

  border-bottom-left-radius: ${p => p.theme.radii.ml};
  border-bottom-right-radius: ${p => p.theme.radii.ml};

  width: ${p => p.theme.sizes.width.semicontainer};

  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: ${p => p.theme.color.background};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.color.secondary};
`;
export const FilterInputForm = styled.input`
  margin-top: ${p => p.theme.space[4]};
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.sizes.width.inputForm};
  height: ${p => p.theme.sizes.height.inputForm};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.color.primary};
`;
