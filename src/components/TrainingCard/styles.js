import styled from 'styled-components';

export const Card = styled.div`


  margin: 0 22px;

  & h2 {
    margin: 24px 0;
    max-width: 230px;
  }

  & > h2 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
  }

  & h2:nth-child(3),
  & h2:nth-child(4),
  & h2:nth-child(5) {
    font-size: 14px;
    line-height: 24px;
  }

  & h2:nth-child(3),
  & h2:nth-child(4) {
    margin: 0;
  }

  & h2:nth-child(5) {
    font-weight: 700;
  }

`;