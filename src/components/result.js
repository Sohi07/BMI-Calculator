import React,{useEffect, useState} from 'react'

export const Result = (props) => {
    const height=props.height;
      const weight=props.weight;
      const unit=props.unit;
    const[message,setMessage]=useState('');
    const [bg,setBg]=useState('#28a745');

   useEffect(()=>{
     if (height<=0 || weight<=0){
      setMessage('Please enter valid height and weight');
      setBg('#dc3545')
      return;
     }
     let bmi=0;
     if (unit==='metric'){
     bmi=(weight*10000)/(height*height);
     }
     else{
      bmi=(weight*703)/(height*height);
     }
     bmi=bmi.toFixed(2);
     if (bmi<18.5){
      setMessage(`Your BMI is ${bmi} You are UNDERWEIGHT`);
      setBg('rgb(214, 182, 0)')
      
     }
     else if (bmi>=18.5 && bmi<24.9){
      setMessage(`Your BMI is ${bmi} You have a HEALTHY WEIGHT`);
      setBg('#28a745');
     }
     else if (bmi>=25 && bmi<29.9){
      setMessage(`Your BMI is ${bmi} You are OVERWEIGHT`);
      setBg('#ff9933');
     }
     else{
      setMessage(`Your BMI is ${bmi} You are OBESE`);
      setBg('#cc0000');
     }
   },[height,weight,unit]);
  return (
    <div className='res' style={{backgroundColor:bg}}>
    {message}
    </div>
  )
}
