import React from 'react';
import { useState } from 'react/cjs/react.development';
import { db } from '../../config/firebase-config';

export default function DateButtton() {
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [buttons, setButtons] = useState(arr);
  // let day = 0;

  let day = 1;
  function getTodayDay() {
    let date = new Date();
    day = date.getDate();
    console.log(day);
  }

 

  

  return (
    <div>
      {buttons.map((num) => {
        return <button onClick={ getTodayDay} key={num.toString()}>{num}</button>;
      })}
    </div>
  );
}
