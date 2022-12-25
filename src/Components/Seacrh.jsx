import React, { useState } from 'react'

function Seacrh({setSearchText}) {
const searchData=(event)=>{
const value=event.target.value;
setSearchText(value)
}
  return (
        <div className='search-Container'>
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input onChange={searchData} type="Search" placeholder='Search here..' />
        </div>       
    
  )
}

export default Seacrh