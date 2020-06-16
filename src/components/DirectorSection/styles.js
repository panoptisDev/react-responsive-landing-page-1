import styled from 'styled-components';



export const DirectorWrapper = styled.div`
  margin: 110px 165px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10vw;
  align-items: center;
  justify-self: center;

`;


export const DirectorTexts = styled.div`

  max-width: 470px;

  & h1{
    font-size: 32px;
    line-height: 42px;
    font-weight: 500;
    text-align: start;
  }

  & h2 {
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
    margin-top: 20px;
  }

  & h2 + h2 {
    font-size: 14px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
  }

  & a {
    font-size: 16px;
  }

  
`;

