import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleFeedback = (option) => {
    setSelectedOption(option);
    onLeaveFeedback(option);
  };

  return (
    <Wrapper>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => handleFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


// import React from 'react';
// import PropTypes from 'prop-types';
// import { Wrapper, Button } from './FeedbackOptions.styled';

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   return (
//     <Wrapper>
//       {options.map(option => (
//         <Button
//           key={option}
//           type="button"
//           onClick={() => onLeaveFeedback(option)}
//         >
//           {option}
//         </Button>
//       ))}
//     </Wrapper>
//   );
// };

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
