import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OverlayFullPage from '../components/OverlayFullPage'
import { GifProvider } from '../context/GifContext';

const Home = React.lazy(() => import('../pages/Home/index'))

const App = () => {
  return (
    <GifProvider>
      <Router>
        <Switch>
          <Suspense fallback={OverlayFullPage}>
            <Route path="/" exact component={Home} />
          </Suspense>
        </Switch>
      </Router>
    </GifProvider>
  );
};

export default App;
