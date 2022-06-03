import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('Funciona el boton y aparece texto', () => {
  render(<App/>)
  // screen.debug()
  const result = 'Aparece un string'
  const button = screen.getByRole('button')

  const p1 = screen.queryByText('Aparece un string')
  expect(p1).not.toBeInTheDocument()

  // screen.debug()

  fireEvent.click(button)

  // screen.debug()

  const p2 = screen.getByText(result)
  expect(p2).toBeInTheDocument()
})