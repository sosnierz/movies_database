import React, { createContext, useEffect, useReducer } from 'react';
import appReducer from './appReducer';

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const MoviesContext = createContext(initialState)




const  MoviesProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);



  // actions
 const addToWatchlist = (movie) => {
    dispatch({
    type: "ADD_TO_WATCHLIST",
    payload: movie
 });
 };
  const addToWatched = (movie) => {
    dispatch({
    type: "ADD_TO_WATCHED",
    payload: movie 
 });
 };

 const removeFromWatchlist = (id) => {
    dispatch({
   type: "REMOVE_FROM_WATCHLIST", 
   payload: id 
 });
 };

 const removeFromWatched = (id) =>  {
    dispatch({
   type: "REMOVE_FROM_WATCHED", 
   payload: id 
 });
 };
 const clearWatched = () =>  {
    dispatch({
   type: "CLEAR_ALL_WATCHED", 
   payload: []
 });
 };
 const clearWatchlist = () =>  {
    dispatch({
   type: "CLEAR_ALL_WATCHLIST", 
   payload: [] 
 });
 };


    return (
        <MoviesContext.Provider value={{
            watched:state.watched,
            watchlist:state.watchlist,
            addToWatched,
            addToWatchlist,
            removeFromWatched,
            removeFromWatchlist,
            clearWatched,
            clearWatchlist       
            }}>
            {props.children}
        </MoviesContext.Provider>
      );
}
 
export default MoviesProvider;