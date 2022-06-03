import { render, screen } from '@testing-library/react'

const Button = () => <button data-testid='boton'>Botón</button>
const Title = () => <p>Titulito de mi página</p>

test('Se renderiza', () => {
  render(
    <>
      <Title/>
      <Title/>
      <Button/>
      {/* <Button/> */}
      <label name='name' htmlFor='name'>Nombre:</label>
      <input type='text'id='name' value='juan'/>
    </>
  )

  const button = screen.getByTestId('boton')

  // const input = screen.getByDisplayValue(/juan/i)

  // const label = screen.getByLabelText('Nombre:')

  // const button = screen.queryAllByRole('button')

  // const title = screen.getAllByText(/titulito/i)

  // console.log(button)

})