import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      className='btn'
      style={{backgroundColor: props.bgColor}}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
} 

Button.defaultProps = {
  bgColor: 'blue',
  text: 'Button'
}

Button.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
