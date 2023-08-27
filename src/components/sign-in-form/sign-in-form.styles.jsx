import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media only screen and (max-width: 800px) {
    width: 200px;
  }

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding_bottom: 10px;
    margin-bottom: 20px;
  }
`;
