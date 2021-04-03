import styles from './Loading.module.scss';

const Loading = () => (
  <div className={styles?.spinner}>
    <div className={styles?.cube1} />
    <div className={styles?.cube2} />
  </div>
);

export default Loading;
