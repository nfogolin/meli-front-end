
const initialState = {
    searchResults: undefined
};

const productsReducer = (state = initialState, action = 'default') =>{
    switch (action.type){
        case 'SET_SEARCH_RESULTS':
            return {
                ...state,
                searchResults: action.searchResults
            }
        default:
            return state
    }
}

export default productsReducer;