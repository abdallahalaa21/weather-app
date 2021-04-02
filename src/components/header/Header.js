import cx from 'classnames';
import styles from './Header.module.scss';

const active = 'C';
const Header = () => (
  <header className={styles.header}>
    <h1>INSTAWEATHER</h1>
    <div>
      <button
        type="button"
        onClick={() => console.log('C')}
        className={cx(
          styles.degreeBtn,
          active === 'C' ? styles.degreeBtnActive : ''
        )}
      >
        C
      </button>
      <button
        type="button"
        onClick={() => console.log('F')}
        className={styles.degreeBtn}
      >
        F
      </button>
    </div>
  </header>
);

export default Header;
