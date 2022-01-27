import styled from 'styled-components';

export const SectionWrapper = styled.div`
  padding: 15px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 450px;
`;

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0;
  font-style: italic;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.62;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.lightYellow};
`;
