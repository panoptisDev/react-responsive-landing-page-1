import styled from 'styled-components';

export const MobileHeader = styled.nav`
  display: none;
  min-height: 10vh;
  max-height: 30px;

  max-width: 100%;
  margin-right: 10px;

  & a {
    align-self: center;
  }

  & button {
    right: 0;
  }

  @media (max-width: 1024px){
    display: flex;
  }
`;

export const BurgerIcon = styled.div`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-self: center;
  margin: 0 50px 0 10px;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#fff' : 'linear-gradient(90deg, #3AE4DF 0%, #7A88FF 104.29%)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1){
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2){
      transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3){
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      
    }
  }
`;

export const Links = styled.div`
  
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  align-self: center;
  justify-content: space-around;
  opacity: 0.98;

  flex-direction: column;
  background: linear-gradient(90deg, #3AE4DF 0%, #7A88FF 104.29%);
  position: fixed;
  height: 100vh;
  width: 200px;
  top: 0;
  left: 0;

  transition: transform 200ms linear;

  @media (max-width: 768px){
      height: 100%;
    }

  }
  
    & a{
      text-decoration: none;
      display: flex;
      font-size: 13px;
      text-transform: uppercase;
      font-weight: 500;
      color: #000000;

        @media(max-width: 1024px){
        &  {
          color: #fff;
          margin: 0;
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