import React from 'react';
import HeaderComponent from './component/HeaderComponent';
import Ep5BodyComponent from '../../assignment/assignment05/Ep5BodyComponent';

/**
 * In this section__
 * - Refer learning-files/ep4.js for understand application layout
 * - First, structured our code and files..
 * - Create a filter button which shows the restaurant who has rating more than 4.
 *      - Create a button on the header component (ref. HeaderComponent.js)
 */

/**
 * Why react ??
 * It's makes our developer experience easy, write less code and do more on the webpage. 
 * Also optimize something on a web page so that things happen very fast
 */

/**
 * There are two ways to export and import a component in react
 * 1. Default export and import
 *  - Default export is used to export only one module from a file 
 * 
 * 2. Named export and import
 *  - Named export is used to export multiple modules from a file
 */

/**
 * React Hooks are normal javascript utility functions
 * There are 2 most important hooks 
 *  1. useState() => It's used to manage the state of a component
 *  2. useEffect() => It's used to manage the side effects of a component
 */

/** 
 * Whenever the state of a component changes, the component will re-render the UI component
 * 
 * React is efficient in DOM-manipulation, it will only update the part of the DOM which is changed.
 * Parcel is a bundler which is used to bundle the react code and make it ready for the production
 * Babel is a transpiler which is used to convert the ES6 code to ES5 code
 * 
 * Virtual DOM
 *  - Its an representation of the actual DOM in the memory
 *  - Virtual DOM is a lightweight copy of the actual DOM
 * 
 * 
 * Reconsciliation Algorithm also known as React Fiber
 *  - It's introduced in React 16
 *  - It's used to update the virtual DOM
 *  - Incremental rendering => It's used to render the part of the UI which is changed
 * 
 * Diffing Algorithm
 *  - It's used to find out the difference between the virtual DOM and the actual DOM
 *  - It's used to update the actual DOM with the minimum number of changes
 */

export default EP5Learning = () => {
    return (
        <div className='app'>
            <HeaderComponent />

            {/* enable for lecture reference */}
            {/* <BodyComponent /> */}

            {/* enable for assignment reference */}
            <Ep5BodyComponent />
        </div>
    )
}