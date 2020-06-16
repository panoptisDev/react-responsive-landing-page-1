import React from 'react';

import ImageBanner from '../../assets/ImageBanner.svg'
import BlueCircles from '../../assets/BlueCircles.svg'
import OrangeCircles from '../../assets/OrangeCircles.svg'
import Button from '../../components/Button'

import * as S from './styles'

const Banner = () => {
  return (
    <S.BannerWrapper>
      <img src={OrangeCircles} alt="image details" />

      <S.BannerContainer>

        <S.BannerContent>
          <h1>Website Design Free Course</h1>
          <h2>One of the activities of Bangladesh Computer Council (BCC) is to develop trained manpower in the field of ICT through ICT training.</h2>
          <Button textContent="Enroll Now" />
        </S.BannerContent>

        <S.BannerImages>
          <img src={ImageBanner} alt="main image banner" />
          <img src={BlueCircles} alt="image details" />

        </S.BannerImages>
      </S.BannerContainer>

    </S.BannerWrapper>
  );
};

export default Banner;