import styles from './app.module.scss';
import Header from './components/header/Header';
import MainSection from './components/mainSection';
import data from './helpers/dummyData';

const App = () => {
  const { current } = data;
  return (
    <div className={styles.container}>
      <Header />
      <MainSection data={current} />
    </div>
  );
};

export default App;
