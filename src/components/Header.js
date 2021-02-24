import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onClickAdd, addStatus }) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' &&
      <Button
        bgColor={addStatus ? 'red' : 'green'}
        text={addStatus ? 'Close' : 'Add'}
        onClick={onClickAdd}
      />}
    </header>
  );
}

Header.defaultProps = {
  title: 'Hello',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;

