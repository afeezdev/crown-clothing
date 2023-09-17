import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;
  margin-top: 80px;

  @media only screen and (max-width: 800px) {
    width: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

