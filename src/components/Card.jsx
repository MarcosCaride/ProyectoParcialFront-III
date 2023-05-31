import React from 'react'
import './Card.css'

const Card = ({nombre, color, genero}) => {
  return (
    <div className='Informacion'>
      <h2>Hola mi nombre es: </h2>
      <h2>{nombre}</h2>
      <button type='disable' style={{backgroundColor: color, color:"black"}}>Mi Genero musical preferido es el: {genero}</button>
      <button type='disable' style={{backgroundColor: color, color:"black"}}>Mi color preferido es el: {color}</button>
    </div>
  )
}

export default Card