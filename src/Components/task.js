import React from 'react'
import './stile.css'
export default function Task({txt,delf}) {
  return (
    <div>
      
      <input type="text"  readOnly value={txt}  />  <input type="button" onClick={delf} value="delete" className='btn' />

    </div>
  )
}



