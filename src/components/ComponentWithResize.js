import React from 'react'

const styles = {
  h1: {
    color: 'blue'
  }
}

const ComponentWithResize = () => {

  return (
      window.innerWidth > 768 ? 
        <h1>Pantalla grande</h1> 
      : 
        <h1 style={styles.h1}>Pantalla chica</h1>
  )
}

export default ComponentWithResize