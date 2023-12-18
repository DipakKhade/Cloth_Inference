//initiliazing the actions

import { ITEM_ADDED } from "./actionTypes";
import { ITEM_REMOVED } from "./actionTypes";

export function itemAdded (description){
    return  {
        type:ITEM_ADDED,
        payload:{
          description: "new item"
        }
      }

}


export function itemRemoved (description){
  return  {
      type:ITEM_REMOVED,
      payload:{
        description: "removed item 1"
      }
    }

}