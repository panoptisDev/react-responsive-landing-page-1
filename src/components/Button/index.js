import React from 'react';

import * as S from './styles'

const Button = ({ textContent }) => {
  return (
    <>
      <S.Button textContent={textContent}>{textContent}</S.Button>
    </>
  );
};

export default Button;
