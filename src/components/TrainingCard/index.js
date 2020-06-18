import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';
import Button from '../Button'

const TrainingCard = ({ courseImage, courseTitle, batch, deadLine, courseFee }) => {

  const formattedCourseFee = useMemo(() => `Tk.${courseFee.toFixed(2)}`,
    [courseFee]);

  return (
    <S.Card>
      <img src={courseImage} alt="Course Logo" />
      <h2>{courseTitle}</h2>
      <h2>Batch No: {batch}</h2>
      <h2>Deadline: {deadLine}</h2>
      <h2>Course Fee: {formattedCourseFee}</h2>
      <Button
        textContent="Details"
        height={40}
        width={120} />
    </S.Card>

  );
};

TrainingCard.propTypes = {
  courseImage: PropTypes.string.isRequired,
  courseTitle: PropTypes.string.isRequired,
  batch: PropTypes.string.isRequired,
  deadLine: PropTypes.string.isRequired,
  courseFee: PropTypes.number.isRequired,
}

export default TrainingCard;