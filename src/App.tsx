import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ModalImageProvider } from './contexts/modal-image-context/index.context';
import BerandaPage from './pages/browse/index.page';
import SearchPage from './pages/search/index.page';
import VMoviePage from './pages/v-movie/index.page';

function App() {
  return (
    <ModalImageProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={() => <Redirect to="/browse" />} />
          <Route path='/browse' component={BerandaPage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/v/:movieId' component={VMoviePage} />
        </Switch>
      </BrowserRouter>
    </ModalImageProvider>
  );
}

export default App;
