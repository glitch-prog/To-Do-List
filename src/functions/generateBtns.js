function generateBtns(){
    let arr = [];
    for(let i = 0;i<=30;i++){
      arr[i]=i+1;
      console.log(arr[i])
    }
    return arr;
  }
 generateBtns();
 
 function getCalendarDate(){
  let day = new Date();
  console.log(day.getDate())
}

getCalendarDate()