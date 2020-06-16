import React from 'react';

import * as S from './styles'

const Button = ({ textContent }) => {
  return (
    <>
      <S.Button>{textContent}</S.Button>
    </>
  );
};

export default Button;
