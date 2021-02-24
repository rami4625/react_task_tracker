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
      <Link to="/" style={linkStyle}><FaArrowLeft /> Go Back</Link>
      <h3 style={{marginTop: '10px'}}>Version: 1.0.0</h3>
    </div>
  )
}

export default About
