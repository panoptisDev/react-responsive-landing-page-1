import styled from 'styled-components';




export const NavBar = styled.nav`
  display: flex;
  padding: 30px 40px;

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
  }

  & a:hover{
    font-weight: 700;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  margin-left: auto;

  & div{
    display: flex;
    margin-right: 30px;

    & img {
      margin-right: 5px;
    }

    & a {
      text-decoration: none;
    }

  }
`;


export const Banner = styled.div`
  
`;