import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const CommonLayout = ({ children }) => <div>{children}</div>;

CommonLayout.propTypes = propTypes;
export default CommonLayout;
