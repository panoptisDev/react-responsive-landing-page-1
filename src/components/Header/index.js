import React from 'react';
import { Link } from 'react-router-dom';


import * as S from './styles';
import Button from '../../components/Button';
import MAQs from '../../assets/MAQs.svg';
import Medal from '../../assets/Medal.svg';

const Header = () => {
  return (
    <S.NavBar>
      <Link to="/"><img src={MAQs} alt="MAQs logo" /></Link>
      <S.Links>
        <Link to="/">home</Link>
        <Link to="/">about us</Link>
        <Link to="/">courses</Link>
        <Link to="/">adminssion</Link>
        <Link to="/">feedback</Link>
        <Link to="/">gallery</Link>
        <Link to="/">contact us</Link>
      </S.Links>


      <S.ButtonsGroup>
        <div>
          <img src={Medal} alt="Medal simbol" />
          <Link to="/">Verify Certificate</Link>
        </div>
        <Button textContent="Log in" />
      </S.ButtonsGroup>

    </S.NavBar>

  );
};


export default Header;
