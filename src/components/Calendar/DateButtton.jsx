import React from 'react';
import { useState } from 'react/cjs/react.development';
// import { db } from '../../config/firebase-config';
import { todayDay,arr } from '../../utils/variables';


export default function DateButtton() {
  

  const [selectedDate, setSelectedDate] = useState(todayDay);

  return (
    <div>
      {arr.map((num) => {
        return (
          <button
            onClick={(event) => {
              setSelectedDate(event.target.textContent);
              console.log(selectedDate);
            }}
            key={num.toString()}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}


