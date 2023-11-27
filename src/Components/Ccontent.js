import React, { useContext } from 'react'
import data from '../assets/data'
import { Langc } from '../context/Langcontext'

export default function Ccontent() {
    const {lang}=useContext(Langc)
  return (
    <div>
      <h2>{data[lang].title}</h2>
      <p>{data[lang].txt}</p>
    </div>
  )
}