
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const [statsUpdated, setStatsUpdated] = useState(false);

  useEffect(() => {
    // Обновляем статус, если изменились данные
    setStatsUpdated(true);
    const timer = setTimeout(() => setStatsUpdated(false), 1000);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, [good, neutral, bad, total, positivePercentage]);

  return (
    <div>
      <List>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive Feedback: {positivePercentage}%</li>
      </List>
      {statsUpdated && <p>Статистика обновлена!</p>}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};


// import React from 'react';
// import PropTypes from 'prop-types';
// import { List } from './Statistics.styled';

// export const Statistics = ({
//   good,
//   neutral,
//   bad,
//   total,
//   positivePercentage,
// }) => {
//   return (
//     <List>
//       <li>Good: {good}</li>
//       <li>Neutral: {neutral}</li>
//       <li>Bad: {bad}</li>
//       <li>Total: {total}</li>
//       <li>Positive Feedback: {positivePercentage}%</li>
//     </List>
//   );
// };

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };
