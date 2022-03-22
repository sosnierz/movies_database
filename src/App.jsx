import React from 'react';
import { Route,  HashRouter as Router, Switch } from 'react-router-dom';

import SearchMovie from './components/SearchMovie/SearchMovie';
import Watched from './components/Lists/Watched';
import WatchList from './components/Lists/WatchList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import MoviesProvider from './Context/MoviesProvider'




const App = () => {
    return ( 
        <MoviesProvider>
          <Router>
             <Header />
            <Switch>
              <Route exact path ='/'>
                <SearchMovie />
              </Route>
              
              <Route path ='/watched'>
                <Watched />
              </Route>
              
              <Route path ='/watchlist'>              
                <WatchList />
              </Route>  
            </Switch>
            <Footer />
          </Router>
          </MoviesProvider>
     );
}
 
export default App;