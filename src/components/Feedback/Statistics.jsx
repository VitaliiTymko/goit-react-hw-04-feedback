import React from 'react';
import css from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, totalPercentage }) => (
  <div>
    {total === 0 && <p>There is no feedback</p>}
    {good > 0 && <p>Good: {good}</p>}
    {neutral > 0 && <p>Neutral: {neutral}</p>}
    {bad > 0 && <p>Bad: {bad}</p>}
    {total > 0 && <p className={css.textTotal}>Total: {total}</p>}
    {total > 0 && (
      <p className={css.positiveFeedback}>
        Positive feedback: {totalPercentage}%
      </p>
    )}
  </div>
);

export default Statistics;
