import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles'

const Button = ({ textContent, height, width }) => {
  return (
    <S.Button
      height={height}
      width={width}
    >{textContent}
    </S.Button>
  );
};

export default Button;

Button.propTypes = {
  textContent: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
}

Button.defaultProps = {
  height: 40,
  width: 140
}
