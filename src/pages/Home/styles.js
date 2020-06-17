import styled from 'styled-components';


export const HomeContainer = styled.div`

  margin-bottom: 50px;

  h1 {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin: 50px 0;
  }
`;


export const UpcomingTrainingList = styled.div`
  display: flex;
  justify-content: center;

  @media(max-width: 800px) {
  display: flex;
  flex-direction: column;
  justify-items: center;
}



`;

