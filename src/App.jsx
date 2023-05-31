import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [nombre, setNombre] = useState("")
  const [codigoColor, setCodigoColor] = useState("")
  const [genero, setGenero] = useState("undefiend")
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre.length > 3 && codigoColor.length > 6 && genero != "undefiend") {
      setMostrarTarjeta(true)
      setError(false)
    }else{
      setError(true)
    }
  }

  return (
    <div className='App'>
      <h1>Panel de Musica y Colores</h1>
      <form onSubmit={handleSubmit}>
        <h2>¡Comparte tu informacion!</h2>
        <label>Nombre:</label>
        <br />
        <input type="text" placeholder='Ingresa tu Nombre aqui' onChange={(e) => setNombre(e.target.value)}/>
        <br />
        <label >Color:</label>
        <br />
        <input type="text" placeholder='Ingresa un codigo HEX' onChange={(e) => setCodigoColor(e.target.value) } />
        <br />
        <label>Ingresa tu genero de musica preferido:</label>
        <br />
        <select name="Genre" id="1" onChange={(e) => setGenero(e.target.value) }>
          <option value="undefiend">Selecciona aqui</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Indie">Indie</option>
          <option value="Jazz">Jazz</option>
          <option value="Rap">Rap</option>
        </select>

        <br />
        <br />
        {error && <h2>Por favor chequea que la información sea correcta</h2>}

        <button type='submit'>¡Listo!</button>
      </form>
      <br />
      <br />

      
      {mostrarTarjeta && <Card nombre={nombre} color={codigoColor} genero={genero} /> }
      
    </div>
  )
}

export default App
