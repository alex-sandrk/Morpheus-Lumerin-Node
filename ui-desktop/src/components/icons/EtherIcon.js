import React from 'react';

export const EtherIcon = ({ size = '4rem', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1920 1920"
    {...props}
    width={size}
  >
    <path fill="#8A92B2" d="M959.8 80.7 420.1 976.3 959.8 731z" />
    <path
      fill="#62688F"
      d="M959.8 731 420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
    />
    <path fill="#454A75" d="m959.8 1295.4 539.8-319.1L959.8 731z" />
    <path fill="#8A92B2" d="m420.1 1078.7 539.7 760.6v-441.7z" />
    <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
  </svg>
);
