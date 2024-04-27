/**
 * Higher order components
 *  - Its a function which takes a component and returns a new component
 *  - It enhances the component with additional props
 */

/**
 * There are two main layer in react application
 *  1. UI Layer (Presentational Components)
 *      - its powered by data layer
 *
 *  2. Data Layer (Container Components)
 *      - its consist of our state, props, logic and data
 * 
 * Need to keet Data layer very strong.
 */

/**
 * Lifiting State Up => When we have multiple components that share the same state, we can lift the state up to their closest common ancestor.
 * Controlled Components || Uncontrolled Components
 */

/**
 * React has a one way data stream like from parent to child
 * - for avoid props drilling we can use context api or redux
 * - context api => its a way to pass data through the component tree without having to pass props down manually at every level
 * 
 * for create an context we can use React.createContext(defaultValue) hook.
 * for use an context we can use useContext(context) hook.
 * for change the context value we can use <Context.Provider> component. which takes a value prop and that value will be available to all the child components.
 * 
 * we also can pass a useState hook function  as a context value.
 * 
 * for access context in class component we have to use <Context.Consumer> component. which takes a function as a child and that function receives the context value as an argument. Refer AboutClass for more details.
 * ```
 *    <UserContext.Consumer>
 *               {
 *                   (user) => {
 *                       return <h1>{user.loggedInUser}</h1>
 *                   }
 *               }
 *    </UserContext.Consumer>
 *   ```
 * 
 * context can be scable when small and midium size application.
 * 
 */