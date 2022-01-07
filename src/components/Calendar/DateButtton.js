import React from 'react';

export default function DateButtton() {
  let div = document.querySelector('.root');
  let day;
  function getTodayDay() {
    let date = new Date();
    day = date.getDay();
    console.log(day);
  }

  getTodayDay();

  function getDateCal() {
    div.addEventListener('click', (event) => {
      if (event.target.className === 'calendarBtn') {
        day = event.target.textContent;
      }
    });
    console.log(day);
  }

  return (
    <>
      <button className='calendarBtn' onClick={getDateCal}>
        1
      </button>
      <button className='calendarBtn' onClick={getDateCal}>
        2
      </button>
      <button className='calendarBtn' onClick={getDateCal}>
        3
      </button>
      <button className='calendarBtn' onClick={getDateCal}>
        4
      </button>
      <button className='calendarBtn' onClick={getDateCal}>
        5
      </button>
    </>
  );
}
