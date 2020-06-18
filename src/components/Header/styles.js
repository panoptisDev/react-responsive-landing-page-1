import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  min-height: 10vh;
  max-height: 30px;
  
  max-width: 100%;
  margin: 0 10px;

  
  & a {
    align-self: center;
  }

  & button {
    right: 0;
  }

  @media (max-width: 1024px){
    display: none;
  }
`;

export const Links = styled.div`
  
  display: flex;
  align-self: center;
  
    & a{
      text-decoration: none;
      display: flex;
      margin-left: 40px;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: 500;
      color: #000000; 
    }

    & a:hover{
      font-weight: 700;
    }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-self: center;
  margin-left: auto;

  & div{
    display: flex;
    margin-right: 30px;

    & img {
      margin-right: 5px;
    }

    & a {
      text-decoration: none;
      font-weight: 500;
      color: #000000;
    }
    
    & a:hover{
      font-weight: 700;
    }
  }
`;