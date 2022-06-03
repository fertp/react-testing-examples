import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Form from './Form'

describe('Form', () => {

  beforeEach(() => { render(<Form/>) })

  test('Se renderiza', () => {
    // render(<Form/>)
  })

  test('Los campos se completan correctamente', () => {
    const inputName = screen.getByRole('textbox', { name: /name/i })
    const inputLastname = screen.getByLabelText(/apellido/i)

    userEvent.click(inputName)
    userEvent.keyboard('Fernan')
    userEvent.keyboard('do')

    expect(screen.getByDisplayValue('Fernando')).toBeInTheDocument()

    console.log(inputName.value)

    userEvent.click(inputLastname)
    userEvent.keyboard('Torres')

    expect(screen.getByDisplayValue(/tor/i)).toBeInTheDocument()
  })

})