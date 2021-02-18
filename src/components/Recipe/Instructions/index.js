import React from 'react';
import PropTypes from 'prop-types';

import './instructions.scss';

const Instructions = ({ steps }) => (
  <section className="steps">
    {steps.map((step) => (
      <div key={step} className="steps__item">
        {step}
      </div>
    ))}
  </section>
);

Instructions.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Instructions;
