
export default (state, action) => {
    switch (action.type) {
        case "ADD_TO_WATCHLIST":
          return {
            ...state,
            watchlist:[action.payload, ...state.watchlist]
        };
        
        case "ADD_TO_WATCHED":
          return {
            ...state,
            watchlist: state.watchlist.filter(
              (movie) => movie.id !== action.payload.id
            ),
            watched: [action.payload, ...state.watched],
        };

        case "REMOVE_FROM_WATCHLIST":
           return {...state,
           watchlist: state.watchlist.filter(
             (movie) => movie.id !== action.payload.id
           ),
        };
        case "REMOVE_FROM_WATCHED":
            return {  ...state,
              watched: state.watched.filter(
                (movie) => movie.id !== action.payload.id
              ),
        };
        default:
         console.warn(`Don't have this type action: ${action.type}`);
         return state;
    }
}