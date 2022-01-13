import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function DateButtton() {
<<<<<<< HEAD
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [buttons, setButtons] = useState(arr);
  // let day = 0;
=======

  let day = 1;
  function getTodayDay() {
    let date = new Date();
    day = date.getDate();
    console.log(day);
  }

  getTodayDay();

  function getDateCal(){
    let div = document.querySelector('.root');
    div.addEventListener('click', (event) => {
      if (event.target.className === 'calendarBtn') {
        day = event.target.textContent;
        console.log(day);
      }
    })}
    
  
>>>>>>> eedd8df8f948c94d5ae52a49149f9dbe2e07ebc2

  return (
    <div>
      {buttons.map((num) => {
        return <button key={num.toString()}>{num}</button>;
      })}
    </div>
  );
}
