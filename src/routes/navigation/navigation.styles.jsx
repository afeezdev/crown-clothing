import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  font-weight: bold;
  background-repeat: repeat-x;
  background-color: #1877f2;
  background-color: rgba(120, 235, 13);
  
  align-items: center;
  border: none;
  margin-bottom: 720px;
  z-index: 999;
  
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 80px;
    padding: 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px;
`;

export const NavLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  color: white;
  cursor: pointer;
`;
