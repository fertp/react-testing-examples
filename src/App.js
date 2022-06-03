import { useState, useEffect } from 'react'

const App = () => {

  const [ showText, setShowModal ] = useState(false)

  const handleClick = () => {
    setShowModal(x => !x)
  }

  return (
    <div>
      <h1>Aprendiendo testing library</h1>
      <button onClick={handleClick}>
        mostrar texto
      </button>
      { showText && <p>Aparece un string</p> }
    </div>
  );
}

export default App;
