import styled from 'styled-components';

import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    @media only screen and (max-width: 800px) {
    margin-top: 30px;
    margin-right: 70px;
    font-size: 20px;
    }
`;

export const PaymentFormTitle = styled.div`
  
    @media only screen and (max-width: 800px) {
    margin-left: 130px;
    font-size: 20px;
    }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;



export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;

  @media only screen and (max-width: 800px) {
    margin-top: 30px;
    margin-right: 70px;
    font-size: 20px;
    }
`;