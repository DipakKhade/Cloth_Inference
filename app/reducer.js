//  Takes state and action and perrform an action on that state and return it

import { ITEM_ADDED } from "./actionTypes";
import { ITEM_REMOVED } from "./actionTypes";

let lastId=0;

export default function reducer(state =[] , action){
    if(action.type === ITEM_ADDED){
        return [
            ...state,
            {
                id : ++lastId,
                description:action.payload.description,
                resolved:false
            }
        ]
    }
    else if (action.type === ITEM_REMOVED){
       return state.filter(item=>item.id !== action.payload.id)
    };

    return state;
}