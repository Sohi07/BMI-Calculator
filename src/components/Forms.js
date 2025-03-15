import React, { useState } from 'react'
import { Result } from './result';
export const Forms = () => {
  const[height,setHeight]=useState('');
  const[weight,setWeight]=useState('');
  const [showres,setShowres]=useState(false);
  const[unit,setUnit]=useState('metric');
  const [disabled,setDisabled]=useState(false);
  function handleChange(event){

     event.target.className==='height'?setHeight(event.target.value):setWeight(event.target.value);
  }
  function handleSubmit(event){
     event.preventDefault();
     if (height==='' || weight==='')return;
     setShowres(true);
     setDisabled(true);
     return;
  }
  function handleClick(event,unitT){
   event.preventDefault();
   setHeight('');
   setWeight('');
   setShowres(false);
  setUnit(unitT);
  }
  function handleClear(event){
   setHeight('');
   setWeight('');
   setShowres(false);
   event.preventDefault();
   setUnit('metric');
   setDisabled(false);
  }
  return (
    <div>
         <h1>BMI CALCULATOR</h1>
         <form>
            <div className='button-container'>
         <button className='us' onClick={(event)=>handleClick(event,'us')}>US Units</button>
         <button className='metric' onClick={(event)=>handleClick(event,'metric')}>Metric Units</button>
         </div>
    <input type='number' 
           placeholder={unit==='metric'?'Enter height in cm':'Enter height in inches'} 
           className='height' 
           value={height} 
           onChange={handleChange}
           readOnly={disabled}/>
    <input type='number' placeholder={unit==='metric'?'Enter weight in kgs':'Enter weight in pounds'} className='weight' value={weight} onChange={handleChange} readOnly={disabled}/>
    <div className='button-container'>
    <button type='submit' onClick={handleSubmit}>Submit</button>
    <button type='clear' onClick={handleClear}>Clear</button>
    </div>
    <div className='res'>{showres && <Result height={height} weight={weight} unit={unit}/>}</div>
    </form>
    </div>
    )}
