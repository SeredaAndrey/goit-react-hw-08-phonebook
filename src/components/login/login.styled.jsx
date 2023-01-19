import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  margin-top: ${p => p.theme.space[0]};
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[4]};
  padding-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.sizes.width.container};
  height: ${p => p.theme.sizes.height.usermenu};

  border-radius: ${p => p.theme.radii.ml};

  background-color: ${p => p.theme.color.backgroundAccent};
`;

export const LoginTitle = styled.h2`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: ${p => p.theme.space[0]};

  text-align: center;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${p => p.theme.color.primary};
`;

export const LoginForm = styled.form`
  margin-top: ${p => p.theme.space[4]};
  margin-right: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: ${p => p.theme.space[4]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};
`;

export const LoginLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: ${p => p.theme.space[0]};
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  width: fit-content;
`;

export const LoginLabel = styled.label`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
  margin-left: ${p => p.theme.space[0]};
`;

export const LoginInput = styled.input`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[4]};
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${p => p.theme.space[0]};
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

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
`;
