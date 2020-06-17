import React from 'react';

import * as S from './styles';
import Header from '../../components/Header';
import Banner from '../../components/Banner'
import TrainingCard from '../../components/TrainingCard';
import DirectorSection from '../../components/DirectorSection';
import Oracle from '../../assets/Oracle.svg';
import Python from '../../assets/Python.svg';
import Android from '../../assets/Android.svg';
import Cisco from '../../assets/Cisco.svg';

const TRAINING_CARD_MOCKS = [
  {
    courseImage: Oracle,
    courseTitle: "Intruduction to Training Programme on Oracle",
    batch: "23",
    deadLine: "12 Mar 2020",
    courseFee: 18000
  },
  {
    courseImage: Python,
    courseTitle: "Intruduction to Training Programme on Python",
    batch: "21",
    deadLine: "18 Mar 2020",
    courseFee: 10000
  },
  {
    courseImage: Android,
    courseTitle: "Professional Android Application Development",
    batch: "01",
    deadLine: "22 Mar 2020",
    courseFee: 18000
  },
  {
    courseImage: Cisco,
    courseTitle: "Server and Internet Security Administrator",
    batch: "06",
    deadLine: "23 Mar 2020",
    courseFee: 18000
  },
];

const Home = () => {
  const [trainingCards, setTrainingCards] = React.useState([]);

  React.useEffect(() => {
    //Simulated request
    setTrainingCards(TRAINING_CARD_MOCKS);
  }, []);

  return (
    <>
      <Header />
      <Banner />

      <S.HomeContainer>

        <DirectorSection />

        <h1>Upcoming Training</h1>

        <S.UpcomingTrainingList>

          {
            trainingCards.map(item => (
              <TrainingCard
                courseImage={item.courseImage}
                courseTitle={item.courseTitle}
                batch={item.batch}
                deadLine={item.deadLine}
                courseFee={item.courseFee}
              />
            ))
          }

        </S.UpcomingTrainingList>

      </S.HomeContainer>

    </>
  );
};

export default Home;