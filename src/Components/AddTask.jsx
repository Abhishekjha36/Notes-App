import React from 'react'
import { useState } from 'react'

function AddTask({handlenote}) {
    const [Change ,setChange]=useState('')
    const char=200;
    const changeData = (event) =>{
      if(char - event.target.value.length >=0){
        setChange(event.target.value)
      }
    };
    const saveData=()=>{
      if(Change.trim().length>0){
        handlenote(Change)
        let str = document.getElementById("mad");
        str.value = "";
        setChange('')
      }
    }
  return (
   <>
   <div className='Note new-note'>
            <div>
                <textarea 
                cols="28" 
                rows="7" 
                placeholder='Add a task...'
                onChange={changeData}
                id='mad'
                ></textarea>
            </div>
            <div className='note-footer new'>
                <span>{char - Change.length} Remaing</span>
                <button onClick={saveData} className='save'>Save</button>
            </div>
   </div>
   </>
  )
}

export default AddTask
