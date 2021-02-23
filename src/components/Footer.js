import {FaCopyright} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkStyle = {
    fontWeight: '500',
    textDecoration: 'none',
    backgroundColor: '#607D8B',
    color: '#fff',
    padding: '6px',
    borderRadius: '5px',
  }

  const pStyle = {
    fontWeight: '400',
    marginBottom: '20px'
  }

  return (
    <footer>
      <p style={pStyle}>Copyright <FaCopyright style={{color: '#444'}} /> Rami Alkhateeb ({new Date().getFullYear()})</p>
      <Link to="/about" style={linkStyle}>About</Link>
    </footer>
  )
}

export default Footer
