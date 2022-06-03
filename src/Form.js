import React from 'react'

const Form = () => {
  return (
    <div>
      <div>
        <label htmlFor='name'>Nombre:</label>
        <input 
          type='text' 
          name='name'
          id='lastname'
          aria-label='name'
        />
      </div>
      <div>
        <label htmlFor='lastname'>Apellido:</label>
        <input 
          type='text'
          name='lastname' 
          id='lastname'
        />
      </div>
      <div>
        <button>Enviar</button>
      </div>
    </div>
  )
}

export default Form