import React from 'react';
import StyledButton from './styledButton';
//import './FlagAnswer.css';

const FlagAnswer = ({correct, answer, onNext}) => (
  <div className='flag-answer'>
    {correct ?
      `Correct!: ${answer}` :
      `Incorrect! Correct Answer: ${answer}`}
    <StyledButton text="NEXT" onClick={onNext} />
  </div>
);

export default FlagAnswer;