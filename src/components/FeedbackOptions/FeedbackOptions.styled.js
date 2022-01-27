import styled from 'styled-components';

export const FeedbackOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
  width: 300px;
`;

export const FeedbackOptionsBtn = styled.button`
  background: linear-gradient(to bottom right, #91572a, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: ${props => props.theme.colors.white};
  padding: 0 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  text-transform: uppercase;
  outline: transparent;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
`;
