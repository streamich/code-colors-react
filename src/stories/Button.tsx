import * as React from 'react';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <button type="button">
      {label}
    </button>
  );
};
