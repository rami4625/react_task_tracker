import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const About = () => {
  const linkStyle = {
    fontWeight: '600',
    color: 'green',
    textDecoration: 'none',
  }

  return (
    <div>
      <h3 style={{marginBottom: '10px'}}>Version: 1.0.0</h3>
      <Link to="/" style={linkStyle}><FaArrowLeft /> Go Back</Link>
    </div>
  )
}

export default About
