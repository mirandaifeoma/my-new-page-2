import React from 'react';

export const Button = ({ text, backgroundColor, color, padding, border, borderRadius }) => {
  return (
    <div>
      <button style={{ backgroundColor, color, padding, border, borderRadius }}>
        {text}
      </button>
    </div>
  )
}

