import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import MAQs from '../../assets/MAQs.svg';
import Medal from '../../assets/Medal.svg';
import * as S from './styles';

const MobileHeader = () => {

  const [open, setOpen] = useState(false);

  return (
    <S.MobileHeader>
      <S.Links open={open}>
        <Link to="/">home</Link>
        <Link to="/">about us</Link>
        <Link to="/">courses</Link>
        <Link to="/">adminssion</Link>
        <Link to="/">feedback</Link>
        <Link to="/">gallery</Link>
        <Link to="/">contact us</Link>
      </S.Links>

      <S.BurgerIcon
        open={open} 
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </S.BurgerIcon>
      <Link to="/"><img src={MAQs} alt="MAQs logo" /></Link>

      <S.ButtonsGroup>
        <div>
          <img src={Medal} alt="Medal simbol" />
          <Link to="/">Verify Certificate</Link>
        </div>
        <Button textContent="Log in" />
      </S.ButtonsGroup>
    </S.MobileHeader>
  );
};

export default MobileHeader;