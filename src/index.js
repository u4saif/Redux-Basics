import store from './store/store'
import  * as actions from './store/bugs';

console.log("Redux started.. at 9000");
console.log(store);
console.log(store.getState());

//First action 
store.dispatch( actions.bugAdded("Bug 1 is added ")); 
console.log(store.getState());

//Second action 
store.dispatch( actions.bugAdded( "Bug 2 added "));
console.log(store.getState());

//third action 
store.dispatch(actions.bugRemoved(2));

//Forth action
store.dispatch(actions.bugResolved(1));

console.log("Final state of store",store.getState());