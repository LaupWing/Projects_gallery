import {TOGGLE_FILTER} from '../actionTypes'

export const toggleFilter = (item)=>{
    return {
        item,
        action: TOGGLE_FILTER
    }
}