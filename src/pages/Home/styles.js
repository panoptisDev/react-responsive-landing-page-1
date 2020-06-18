import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 100px;
  min-width: 100%;

  @media(max-width: 1200px){
    margin: 0 5 100px;
  }

  @media(max-width: 770px){
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin: 50px 0;
  }
`;

export const UpcomingTrainingList = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;

  @media(max-width: 1200px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  }

  @media(max-width: 770px) {
    grid-template-columns: 1fr;

  }

  
`;

