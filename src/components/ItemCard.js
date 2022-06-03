import { Link } from 'react-router-dom'

const ItemCard = ({ title, description, link }) => {
  return (
    <article>
      <h3>{ title }</h3>
      <p>{ description }</p>
      <Link to={link}>VER ITEM</Link>
    </article>
  )
}

export default ItemCard