import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  height: 10vh;
  margin: 0 40px;

  display: none;

  & a {
    align-self: center;
  }

  & button {
    right: 0;
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

    @media(max-width: 770px){
      font-size: 2em;
    } 
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