import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media only screen and (max-width: 800px) {
    width: 250px;
  }

  h2 {
    margin: 10px 0;
  }
`;
