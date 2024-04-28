/**
 * Learn Redux and manage state with Redux in this episode.
 * 
 * Redux is not mendetory to use with React. But it is very popular with React.
 * Redux is saparate library from React. It is a state management library.
 * 
 * Redux is not only library to manage state. there are other lib like zustand.
 * 
 * Advantages of Redux:
 *  1. Primarly use for state management.
 *  2. It is predictable state management.
 *  3. Offers easy debugging.
 * 
 * We will use Redux toolkit & React redux in this episode.
 * 
 * Redux store is an Big object with many states inside it, that capt in the centeral global place.
 * To keep data sparate we make logical partations in the store. that partation is called as slice.
 * 
 * Write data :
 * 
 * We can not directly change the state in the store or slice. We have to dispatch an action to change the state.
 * 
 * When button click => dispatch an action => calling a function => change the state.
 * now what is that functions? the function is `reducer`.
 * 
 * Read data :
 * 
 * For read data we use `selector`. and this selector will update the states in the store.
 * "subscribing to the store" => "selector" => "update the state"
 * 
 * => Install @reduxjs/toolkit & react-redux
 * => Build our store
 * => Connect our store to our app
 * => Create a slice
 * => Dispatch an action
 * => Read data using selector (selectore is nothing but its a hook)
 * 
 * We need to subscribe a perticuler portion of the store only instaded of whole store.
 * 
 * When we config a store, we have a big object of reducer.
 * When we build slice, we have multiple function in reducers.
 * we exporting reducer from the slice.
 * reducer is nothing but just a combination of multiple reducers.
 * 
 * redux uses immmer behind the scenes
 */