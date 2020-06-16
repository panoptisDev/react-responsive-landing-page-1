import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: linear-gradient(90deg, #FFFCEB 0%, #EAFFFE 100%);
  height: 85vh;
`;

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const BannerContent = styled.div`
  display: inline-block;
  margin: auto auto;
  width: 24vw;

  & h1 {
    font-size: 56px;
    font-family: 'Product Sans';
    font-weight: 500;
  }

  & h2 {
    font-size: 18px;
    font-weight: 500;
  }

  & button {
    margin-top: 60px;
  }
`;







export const Wrapper = styled.div`
  background: #FFF;
  height: 100vh;
`;

