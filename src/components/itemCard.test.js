import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import ItemCard from './ItemCard'


describe('itemCard', () => {

  test('renders correctly', () => {
    const item = {
      title: 'Título',
      description: 'Unadescripción corta.',
      link: 'https://example.com/items/1'
    }
    render( <ItemCard {...item} />, { wrapper: MemoryRouter } )
    screen.debug()
  })
})