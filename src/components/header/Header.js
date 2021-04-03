import { useContext } from 'react';
import { DegreeContext } from 'context/tempDegreeContext';
import cx from 'classnames';
import styles from './Header.module.scss';

const Header = () => {
  const { type, setType } = useContext(DegreeContext);

  return (
    <header className={styles.header}>
      <h1>INSTAWEATHER</h1>
      <div>
        <button
          type="button"
          onClick={() => setType('C')}
          className={cx(
            styles.degreeBtn,
            type === 'C' ? styles.degreeBtnActive : ''
          )}
        >
          C
        </button>
        <button
          type="button"
          onClick={() => setType('F')}
          className={cx(
            styles.degreeBtn,
            type === 'F' ? styles.degreeBtnActive : ''
          )}
        >
          F
        </button>
      </div>
    </header>
  );
};

export default Header;
