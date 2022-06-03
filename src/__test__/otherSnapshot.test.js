import renderer from 'react-test-renderer'
import { render, screen, getByText } from '@testing-library/react'

const Header = () => {
  return (
    <header data-testid='header'>
      <h1>Soy un Títulos</h1>
    </header>
  )
}

test('Snapshot with testing-library', () => {
  const { container } = render(<Header/>)
  expect(container).toMatchSnapshot()
})

test('Snashot with react-test-renderer', () => {
  const tree = renderer.create(<p>Hola</p>).toJSON()
  expect(tree).toMatchInlineSnapshot(`
  <p>
    Hola
  </p>
  `)
})



test('Seleccionar elementos anidados', () => {
  // render(<Header/>)
  // const header = screen.getByTestId('header')
  // const title = getByText(header, 'Soy un Título')
  // expect(title).toBeInTheDocument()
})