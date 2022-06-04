import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useContext } from 'react'

import ComponentWithContext from './ComponentWithContext'

jest.mock('react', () => {
  const originalModule = jest.requireActual('react')
  
  return {
    __esModule: true,
    ...originalModule,
    useContext: jest.fn()
  }
})


describe('Component with context', () => {

  beforeEach(() => {
    // A changeTheme se le puede asignar directamente una función en lugar de un mock
    // Ej. changeTheme: () => { ... }
    // O definir una implementación para el mock
    // Ej. changeTheme: jest.fn(() => { ... })
    const value = { theme: 'clear', changeTheme: jest.fn() }
    useContext.mockReturnValue(value)
  })
  
  test('Example with useContext mock', () => {
    render(<ComponentWithContext/>)
    screen.debug()
    expect(useContext.mock.calls.length).toBeGreaterThan(0)
  })
  
  test('Renders theme name and button', () => {
    render(<ComponentWithContext/>)
    const themeName = screen.getByText(/clear/i)
    const button = screen.getByRole('button', { name: /change/i })
  })

})