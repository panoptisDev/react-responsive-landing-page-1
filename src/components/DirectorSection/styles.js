import styled from 'styled-components';

export const DirectorWrapper = styled.div`
  margin: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
  align-self: center;


  @media(max-width: 768px){
    grid-template-columns: 1fr;
    justify-content: center;
  }
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

