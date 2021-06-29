//1. Action type
const BUG_ADDED="bugAdded";
const BUG_REMOVED="bugRemoved";

//2. Action creator
export const bugAdded= discription=>({
    type: BUG_ADDED,
    payload:{
        discription
    }
});

let lastId=0;

//3. Reducer 
export default function reducer(state=[],action){
    switch(action.type){
        case BUG_ADDED:
            return [
                ... state,
                {
                    id: ++lastId,
                    discription: action.payload.discription,
                    resolved: false
                }
            ]
        case BUG_REMOVED:
            return    state.filter(bug=> bug.id != action.payload.id);                
    }
}