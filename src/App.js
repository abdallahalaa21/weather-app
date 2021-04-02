import styles from './app.module.scss';
import Header from './components/header/Header';

const App = () => (
  <div className={styles.container}>
    <Header />
    Hello from app
  </div>
);

export default App;
