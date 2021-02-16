import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onClickAdd, addStatus }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        bgColor={addStatus ? 'red' : 'green'}
        text={addStatus ? 'Close' : 'Add'}
        onClick={onClickAdd}
      />
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




/* ------ Other Way To Write Component With Props ------ */
// const Header = ({ title }) => {
//   return (
//     <header>
//       <h1>{title}</h1>
//     </header>
//   );
// }


/* ------ Style Variable ------ */
// const myStyle = {
//   color: 'red',
//   fontWeight: 'bold',
//   backgroundColor: 'gray',
// }
