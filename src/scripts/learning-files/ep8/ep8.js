/**
 * for passing props to class component we can use constructor
 * @param {Object} props 
 * 
 * when we loading a class component we can create an instance of the class
 * when react was build initially it was using class component  
 * Never update the state directly, always use setState method
 * 
 * Lifecycle of React Component:
 *  - When class mounting or class instanciate, first constructor will be called and then render method will be called
 *  - If there is an componentDidMount, First constructor will called, render will called then this componentDidMount will be called
 * 
 * ComponentDidMount will majorly used for API calls, for re-render the component after the data is loaded
 * 
 * There are two phases in react life cycle: 
 *  - Render Phase: In this phase react will determine what to render and how to render
 *  - Commit Phase: In this phase react will apply the changes to the DOM
 * 
 * Due to this batching react will not update the DOM immediately, it will wait for the batch to complete and then update the DOM, this is called batching
 * For this reason react is faster than other frameworks
 * 
 * life cycle in diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 * 
 * --- Mounting ---
 * Constructor
 * Render
 *   <HTML is created>
 * Component Did Mount
 *   <API Calls>
 *   <this.setState> => State variable is updated
 * 
 * --- Updating ---
 *    Render (API data)
 *    <HTML is created>
 *    Component Did Update
 */