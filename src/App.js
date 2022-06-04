import { useState } from 'react'
import ComponentWithContext from './components/ComponentWithContext'
import { AppProvider } from './contexts/AppContext'

const App = () => {

  const [ showText, setShowModal ] = useState(false)

  const handleClick = () => {
    setShowModal(x => !x)
  }

  return (
    <AppProvider>
      <h1>Aprendiendo testing library</h1>
      <button onClick={handleClick}>
        mostrar texto
      </button>
      { showText && <p>Aparece un string</p> }
      <hr/>
      <h2>Context example</h2>
      <ComponentWithContext/>
    </AppProvider>
  );
}

export default App;
