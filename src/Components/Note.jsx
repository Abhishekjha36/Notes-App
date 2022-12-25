import React from 'react'

function Note({text,date,date1,id,deleteNotes}) {
  return (
    <>
        <div className='Note'>
            <div className='note-taxt'>
                <span>{text}</span>
            </div>
            <div className='note-footer'>
                <span>{date} {date1}</span>
                <button className='save' onClick={()=>deleteNotes(id)}>
                    delete
                </button>
            </div>
        </div>
    </>
  )
}

export default Note