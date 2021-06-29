import store from './store/store'


console.log("Redux started.. at 9000");
console.log(store);
console.log(store.getState());

//First action 
store.dispatch({
    type:"bugAdded",
    payload:{
        discription: "Bug is added "
    }
}); 
console.log(store.getState());

//Second action 
store.dispatch({
    type:"bugAdded",
    payload:{
        discription: "Bug 2 added "
    }
});
console.log(store.getState());

//third action 
store.dispatch({
    type:"bugRemoved",
    payload:{
        id: 2
    }
});

console.log("Final state of store",store.getState());