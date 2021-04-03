import React, {
  createContext,
  useCallback,
  useState
} from 'react';
import PropTypes from 'prop-types';

export const DegreeContext = createContext();

const TempDegreeProvider = ({ children }) => {
  const [type, setType] = useState('C');
  const formatTemp = useCallback(
    temp => {
      let degree = temp;
      if (type === 'C') {
        degree = ((temp - 32) * 5) / 9;
      }
      return degree.toFixed();
    },
    [type]
  );
  return (
    <DegreeContext.Provider
      value={{ type, setType, formatTemp }}
    >
      {children}
    </DegreeContext.Provider>
  );
};

TempDegreeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default TempDegreeProvider;
