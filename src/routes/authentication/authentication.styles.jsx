import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  margin-top: 100px;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

