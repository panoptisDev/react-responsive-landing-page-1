import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import Header from '../../components/Header';
import Banner from '../../components/Banner'
import TrainingCard from '../../components/TrainingCard';
import DirectorSection from '../../components/DirectorSection';
import Oracle from '../../assets/Oracle.svg'
import Python from '../../assets/Python.svg'
import Android from '../../assets/Android.svg'
import Cisco from '../../assets/Cisco.svg'


const Home = () => {
  return (
    <>
      <Header />
      <Banner />

      <S.HomeContainer>

        <DirectorSection />

        <h1>Upcoming Training</h1>

        <S.UpcomingTrainingList>

          <TrainingCard
            courseImage={Oracle}
            courseTitle="Intruduction to Training Programme on Oracle"
            batch="23"
            deadLine="12 Mar 2020"
            courseFee="18000.00" />

          <TrainingCard
            courseImage={Python}
            courseTitle="Intruduction to Training Programme on Python"
            batch="21"
            deadLine="18 Mar 2020"
            courseFee="10000.00" />

          <TrainingCard
            courseImage={Android}
            courseTitle="Professional Android Application Development"
            batch="01"
            deadLine="22 Mar 2020"
            courseFee="18000.00" />

          <TrainingCard
            courseImage={Cisco}
            courseTitle="Server and Internet Security Administrator"
            batch="06"
            deadLine="23 Mar 2020"
            courseFee="18000.00" />
        </S.UpcomingTrainingList>

      </S.HomeContainer>



    </>
  );
};

export default Home;