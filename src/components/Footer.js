import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>
            Copyright: JM, 2022
        </p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer