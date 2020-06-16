import React from 'react';

import * as S from './styles'
import Header from '../../components/Header'
import ImageBanner from '../../assets/ImageBanner.svg'
import Button from '../../components/Button'

const Home = () => {
  return (
    <>
      <Header />

      <S.BannerWrapper>

        <S.BannerContainer>

          <S.BannerContent>
            <h1>Website Design Free Course</h1>
            <h2>One of the activities of Bangladesh Computer Council (BCC) is to develop trained manpower in the field of ICT through ICT training.</h2>
            <Button />
          </S.BannerContent>
          <img src={ImageBanner} alt="main image banner" />
        </S.BannerContainer>

      </S.BannerWrapper>

      <S.Wrapper>

      </S.Wrapper>




    </>
  );
};

export default Home;