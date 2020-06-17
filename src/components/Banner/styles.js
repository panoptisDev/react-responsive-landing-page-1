import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: linear-gradient(90deg, #FFFCEB 0%, #EAFFFE 100%);
  height: 100%;

`;

export const BannerContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-around;

  @media(max-width: 768px) {
    flex-direction: column;
  }

  & img {
    margin-top: 45px;

    @media(max-width: 1025px){
      width: 70%;
      height: 70%;
      margin: 30px auto;
    }

    @media(max-width: 768px){
      width: 90%;
    }
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

    @media(max-width: 768px){
      align-self: center;
    }
  }
`;
