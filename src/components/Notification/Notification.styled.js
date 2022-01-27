import styled from 'styled-components';

export const NotificationText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 15px;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  color: ${props => props.theme.colors.white};
`;
