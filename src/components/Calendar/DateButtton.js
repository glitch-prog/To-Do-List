import React from 'react';

export default function DateButtton() {
  const calc = function generateButtons() {
    const calendar = document.createElement('div');
    console.log(calendar);
    for (let i = 0; i <= 30; i++) {
      let button = document.createElement('button');
      button.textContent = i + 1;
      calendar.append(button);
    }
    document.body.append(calendar);
  
  };
  return <div className='calendar'>{calc}</div>;
}
