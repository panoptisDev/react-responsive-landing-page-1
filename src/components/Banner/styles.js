import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: linear-gradient(90deg, #FFFCEB 0%, #EAFFFE 100%);
  height: 90vh;
`;

export const BannerContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-around;

  & img {
    margin-top: 45px;
  }
  
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  max-width: 380px;

  & h1 {
    font-size: 56px;
    font-family: 'Product Sans';
    font-weight: 500;
  }

  & h2 {
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
    margin-top: 25px;
  }

  & button {
    margin-top: 60px;
  }
`;
