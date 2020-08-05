import * as actionTypes from '../actionTypes';
import projects from './projects.json';
import icons from '../../components/SearchBar/MoreFilters/FilterIcons';

const initialState = {
    projects,
    filters:[],
    searchTerm: '',
    sortBy: 'favorite'
};

const filterToggle = (state, action)=>{
    let newFilters = [...state.filters];

    if(action.item === 'deselectAll' || action.item === 'selectAll'){
        if(action.item === 'deselectAll'){
            newFilters = icons.map(x=>x.icon);
        }else{
            newFilters = [];
        }
    }
    else if(newFilters.includes(action.item)){
        newFilters = newFilters.filter(x=>x!==action.item);
    }else{
        newFilters.push(action.item);
    }
    return {
        ...state,
        filters: newFilters
    };
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.TOGGLE_FILTER: return filterToggle(state, action);
        case actionTypes.SET_SORTBY: return {...state, sortBy:action.item};
        case actionTypes.SET_SEARCH: return {...state, searchTerm: action.search};
        default: return state;
    }
}

export default reducer;