import React from 'react';

import * as S from './styles';
import Button from '../Button'

const TrainingCard = ({ courseImage, courseTitle, batch, deadLine, courseFee }) => {
  return (
    <S.Card>
      <img src={courseImage} alt="course image" />
      <h2>{courseTitle}</h2>
      <h2>Batch No: {batch}</h2>
      <h2>Deadline: {deadLine}</h2>
      <h2>Course Fee: Tk.{courseFee}</h2>
      <Button textContent="Details"/>
    </S.Card>
  );
};

export default TrainingCard;