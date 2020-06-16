import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: linear-gradient(90deg, #FFFCEB 0%, #EAFFFE 100%);
  height: 90vh;

  & > img {
    position: absolute;
    right: 45%;
    top: 12%;
  }

  
`;

export const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  
`

export const BannerContent = styled.div`
  display: inline-block;
  margin: auto auto;
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
    width: 200px;
    height: 60px;
  }
`;


export const BannerImages = styled.div`
    position: relative;

  & img:nth-child(2) {
    position: absolute;
    right: 40px;
    top: 75%;
  }

  
`;
