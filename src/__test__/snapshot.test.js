import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

const Header = () => {
  return (
    <header>
      <h1>Soy un header</h1>
    </header>
  )
}


test('Snapshot using render @testing-library', () => {
  const { container } = render( <Header/> )
  expect(container).toMatchSnapshot()
})

test('Snapshot using react-test-renderer', () => {
  const tree = renderer.create(<header>ok</header>).toJSON()
  expect(tree).toMatchInlineSnapshot(`
  <header>
    ok
  </header>
  `)
})