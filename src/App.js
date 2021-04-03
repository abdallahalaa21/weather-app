import { memo, useMemo } from 'react';
import TempDegreeProvider from 'context/tempDegreeContext';
import useTemp from 'hooks/useTemp';
import styles from './app.module.scss';
import Header from './components/header/Header';
import MainSection from './components/mainSection';
import ListingTemp from './components/listingTemp';
import Loading from './components/loading';
import Error from './components/error';

const App = () => {
  const {
    city,
    currently,
    daily,
    hourly,
    loading,
    error,
    setDummy
  } = useTemp();

  const dailyModify = useMemo(() => {
    if (daily?.data.length) {
      const [today, ...nextDays] = daily.data;
      return { today, nextDays };
    }
    return {};
  }, [daily]);
  return (
    <TempDegreeProvider>
      <div className={styles.container}>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <>
            {error ? (
              <Error onClick={setDummy} />
            ) : (
              <>
                <MainSection
                  data={{
                    city,
                    today: dailyModify?.today,
                    ...currently
                  }}
                />
                <ListingTemp
                  hourly={hourly?.data}
                  daily={dailyModify?.nextDays}
                />
              </>
            )}
          </>
        )}
      </div>
    </TempDegreeProvider>
  );
};

export default memo(App);
