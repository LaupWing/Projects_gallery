import * as actionTypes from '../actionTypes'

const initialState = {
    projects: [],
    filters:['Django', 'Electron']
}


const filterAdd = (state, action)=>{
    const newFilters = [...state.filters, action.item];
    return {
        ...state,
        filters: newFilters
    };
}
const filterRemove = (state, action)=>{
    const newFilters = [...state.filters].filter(x=>x===action.item);
    return {
        ...state,
        filters: newFilters
    };
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_FILTER: return filterAdd(state, action);
        case actionTypes.REMOVE_FILTER: return filterRemove(state, action);
        default: return state;
    }
}

export default reducer;