import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Notification.styled';
// import { render } from '@testing-library/react';
// import { ClassNames } from '@emotion/react';

export const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
