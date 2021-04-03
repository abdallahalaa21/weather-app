import useTemp from 'hooks/useTemp';
import { memo, useMemo } from 'react';
import styles from './app.module.scss';
import Header from './components/header/Header';
import MainSection from './components/mainSection';

const App = () => {
  const { city, currently, daily } = useTemp();

  const dailyModify = useMemo(() => {
    if (daily?.data.length) {
      const [today, ...nextDays] = daily.data;
      return { today, nextDays };
    }
    return {};
  }, [daily]);

  return (
    <div className={styles.container}>
      <Header />
      <MainSection
        data={{
          city,
          today: dailyModify?.today,
          ...currently
        }}
      />
    </div>
  );
};

export default memo(App);
