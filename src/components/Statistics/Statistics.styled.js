import styled from 'styled-components';

export const StatisticsList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 15px;
  list-style: none;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  color: ${props => props.theme.colors.white};
`;
