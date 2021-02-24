import {FaCopyright, FaHeart} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const linkStyle = {
    fontWeight: '500',
    textDecoration: 'none',
    backgroundColor: '#52778c',
    color: '#fff',
    padding: '6px',
    borderRadius: '5px',
  }

  const pStyle = {
    fontWeight: '600',
    marginTop: '20px'
  }

  const p2Style = {
    fontWeight: '600',
    marginTop: '10px'
  }

  const location = useLocation();

  return (
    <footer>
      {location.pathname === '/' &&
      <Link to="/about" style={linkStyle}>About</Link>}
      <hr style={{marginTop: '30px'}}/>
      <p style={pStyle}>Created with <FaHeart style={{color: 'red'}} /> By Rami Alkhateeb</p>
      <p style={p2Style}>All Rights Reserved <FaCopyright style={{color: '#333'}}/> {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
