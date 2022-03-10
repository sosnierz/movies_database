import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

// import StoreProvider from './store/StoreProvider';
import SearchMovie from './components/SearchMovie/SearchMovie';
import Watched from './components/Watched/Watched';
import WatchList from './components/WatchList/WatchList';
import Header from './components/Header/Header';
import './App.scss';



const App = () => {
    return ( 
        
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
          </Router>
             
     );
}
 
export default App;