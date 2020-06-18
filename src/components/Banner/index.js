import React from 'react';

import * as S from './styles'
import Button from '../../components/Button';
import ImageBanner from '../../assets/ImageBanner.svg';


const Banner = () => {
  return (
    <S.BannerWrapper>

      <S.BannerContainer>

        <S.BannerContent>
          <h1>Website Design Free Course</h1>
          <h2>One of the activities of Bangladesh Computer Council (BCC) is to develop trained manpower in the field of ICT through ICT training.</h2>
          <Button 
          textContent="Enroll Now"
          height={60}
          width={200} />
        </S.BannerContent>

        <img src={ImageBanner} alt="main banner" />

      </S.BannerContainer>

    </S.BannerWrapper>
  );
};

export default Banner;