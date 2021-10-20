import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import BerandaPage from './pages/beranda/index.page';
import SearchPage from './pages/search/index.page';
import VvideoPage from './pages/v-video/index.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => <Redirect to="/browse" />} />
        <Route path='/browse' component={BerandaPage} />
        <Route path='/search' component={SearchPage} />
        <Route path='/v/:videoId' component={VvideoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
