import * as actionTypes from '../actionTypes';
import projects from './projects.json';
import moment from 'moment';

projects.forEach(p=>{
    console.log(p.createdAt)
    console.log(moment(p.createdAt, "MMMM D YYYY"))
    console.log(moment(p.createdAt, "D MMMM YYYY").fromNow())
})
const initialState = {
    projects,
    filters:[],
    sortBy: 'favorite'
};

const filterToggle = (state, action)=>{
    let newFilters = [...state.filters];
    if(newFilters.includes(action.item)){
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
        default: return state;
    }
}

export default reducer;