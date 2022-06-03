/* eslint-disable testing-library/prefer-find-by */
import { render, screen, waitFor } from '@testing-library/react'
import Component from './LazyComponent'

test('Se renderiza asincronicamente con waitFor', async () => {
  render(<Component/>)
  await waitFor(() => screen.getByText(/soy un string lento/i))
  // screen.debug()
})

test('Se renderiza asincronicamente con findBy', async () => {
  render(<Component/>)
  await screen.findByText(/soy un string lento/i)
  // screen.debug()
})