import styled from '@emotion/styled';

export const AppPrimaryContainer = styled.div`
  width: ${p => p.theme.sizes.width.container};
  height: ${p => p.theme.sizes.height.container};

  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[9]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[9]};

  border-radius: ${p => p.theme.radii.normal};
`;
