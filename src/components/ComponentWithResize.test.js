import { render, screen } from '@testing-library/react'
import ComponentWithResize from './ComponentWithResize'
import '@testing-library/jest-dom'

test('Testing rezising', () => {
  console.log(window.innerWidth)
  window.innerWidth = 375
  console.log(window.innerWidth)
  render( <ComponentWithResize/> )
  screen.debug()
  expect(screen.getByRole('heading')).toHaveStyle({ color: 'blue' })
})