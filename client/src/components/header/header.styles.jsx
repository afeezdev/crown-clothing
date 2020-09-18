import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  right:0;
  z-index: 1;
  justify-content: space-between;
  font-weight: bold;
  color: purple;
  background-image: url('https://www.circularonline.co.uk/wp-content/uploads/2019/12/scap.png');
  background-repeat: repeat-x;
  

  
  @media screen and (max-width: 800px) {
    height: 70px;
    padding: 10px;
    margin-bottom: 50px;
  }
`;

export const LogoContainer = styled(Link)`
     height: 100%;
     width: 70px;
     padding: 15px;

     @media screen and (max-width: 800px) {
      width: 50px;  
      padding: 0px;
  }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    

    @media screen and (max-width: 800px) {
      width: 80%;
  }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    color: purple;
`;
