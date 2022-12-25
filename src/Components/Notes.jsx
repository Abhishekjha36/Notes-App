import React from 'react'
import Note from './Note'
import AddTask from "./AddTask";
function Notes({Taxt,deleteNotes ,handlenote}) {
  return (
    <>
      <div className="container">
      <AddTask  handlenote={handlenote}/>
        {Taxt.map((curnt, index) => (
          <Note
            key={index}
            text={curnt.text}
            date={curnt.date}
            date1={curnt.date1}
            index={index}
            id={curnt.id}
            deleteNotes={deleteNotes}
          />
        ))}
      </div>
    </>
  )
}

export default Notes