import React from 'react';
import { useHistory } from '@docusaurus/router';
import Countdown from './Countdown';

const centerTextStyles = {
  textAlign: 'center',
};

const MainPage = () => {
  const history = useHistory();

  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <div style={centerTextStyles}>

      <div style={{ fontSize: '48px' }}>
        <Countdown />
      </div>

      <button className="button button--primary" onClick={redirectToHome}>
        Go back to Home
      </button>
    </div>
  );
};

export default MainPage;
