import React from 'react';
import { Link } from 'react-router-dom'

import * as S from './styles'
import DirectorPhoto from '../../assets/DirectorPhoto.svg'

const DirectorSection = () => {
  return (
    <S.DirectorWrapper>
      <img src={DirectorPhoto} alt="Director" />

      <S.DirectorTexts>
        <h1>Message from Executive Director (MAQs)</h1>
        <h2>Hi, I am fortunate  to have a very strong team of high skilled professionals who support me to carry forward the mission of  MAQs.</h2>
        <h2>We have gone through a serious transformation recently to run our business treating everyone coming to us a customer. This means we try to ensure “customer service” in whatever we do and are always keen to see a happy smile in all our customer’s face....</h2>
        <Link to="/">Read More</Link>
      </S.DirectorTexts>

    </S.DirectorWrapper>
  );
};

export default DirectorSection;