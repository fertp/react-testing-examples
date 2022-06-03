import { useState, useEffect } from 'react'

const getLazyText = () => new Promise(resolove => setTimeout(() => resolove('Soy un string lento', 1500)))

const LazyComponent = () => {
  
  const [ lazyText, setLazyText ] = useState('')

  useEffect(() => {
    getLazyText()
      .then(response => setLazyText(response))
  } ,[])

  return (
    <div>{ lazyText }</div>
  )
}

export default LazyComponent