import * as actionTypes from '../actionTypes'

const initialState = {
    projects: [],
    filters:['django', 'electron'],
    sortBy: 'favorite'
}


const filterToggle = (state, action)=>{
    let newFilters = [...state.filters];
    if(newFilters.includes(action.item)){
        newFilters = newFilters.filter(x=>x!==action.item);
    }else{
        newFilters.push(action.item)
    }
    return {
        ...state,
        filters: newFilters
    };
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.TOGGLE_FILTER: return filterToggle(state, action);
        default: return state;
    }
}

export default reducer;