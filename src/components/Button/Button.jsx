import PropTypes from 'prop-types';
import s from '../Button/Button.module.scss';

function Button({ handleClickBtn }) {
  return (
    <div className={s.div}>
      <button className={s.button} type="button" onClick={handleClickBtn}>
        Load more
      </button>
    </div>
  );
}
Button.propTypes = {
  handleClickBtn: PropTypes.func.isRequired,
};
export default Button;
