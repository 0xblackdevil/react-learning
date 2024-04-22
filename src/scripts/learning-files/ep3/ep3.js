import React from "react";
import ReactDOM from "react-dom/client";

// Render React element to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));


/**
 * How React createElement works?
 * React.createElement => ReactElement === JS Object => HTMLElement(render)
 */
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
root.render(heading);

/**
 * JSX element which is transpiled to React element by PARCEL : Babel
 * JSX is looks like HTML but it is not HTML
 * 
 * Parcel is just an manager for bundling and transpiling
 * Babel is a transpiler which converts JSX to React element
 * Babel takes your JSX code and converts it into a JS code which browser can understand
 * 
 * understand Babel: 
 *  - Babel is an open-source JavaScript compiler
 *  - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments
 *  - Babel can convert JSX syntax to React.createElement calls
 * 
 * How JSX works?
 * JSX => Babel transpiles  it to React.createElement => ReactElement(JS Object) => ReactDOM.render => HTML Element
 * 
 * TODO: Try to explore more about Babel and expolre more attributes of JSX like className, htmlFor, etc.
*/
const JsxHeading = (<h1 id="heading">Hello React 🚀</h1>)

// @remark: It's render React element, which is written in JSX
root.render(JsxHeading);

/**
 * True thing is => Everything is a component in React, but what is component
 * There are two types of components in React 
 *  1. Class based component [old way of writen component]
 *  2. Functional component [new way of writing component] => Just a function which returns JSX
 * 
 */

/**
 * React Functional Component
 *  - Function Component is just a normal JavaScript function which returns JSX
 *  - Functional Component is returning some React element object
 *  - Need to set the name of the function in PascalCase
 */
const FunctionComponentExample = () => {
    return <h1 className="heading">Hello React 🚀, Its functional component 🤯</h1>
}

// @remark: It's render React Functional Component, which is written in JSX
root.render(<FunctionComponentExample />);

/**
 * Example of nested component in React
 * TODO: Nested components are also known as Component Composition
 * - Component Composition is a way to combine multiple components together to create a new component
 */

const HelloReactComponent = () => {
    return <h1 className="mainHeading">Hello React 🚀</h1>
}

const NestedComponentExample = () => {
    return (
        <div className="container">
            <HelloReactComponent />
            <h1 className="subHeading">About heading is nested into this component 😁</h1>
        </div>
    );
}

root.render(<NestedComponentExample />);

/** 
 * If we need to exicute some javascript code inside JSX, we can use {} to wrap the code
 * Thats why JSX is a mix of HTML and JavaScript
 * 
 * So, now lets see how we can put out react element inside a variable and use it inside JSX
 * Also you put element into element 
 */
const paragraphTitle = <h4>Placeholder Paragraph</h4>

const placeholderParagraph = (
    <span>
        {paragraphTitle}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </span>
);

const ReactElementInsideJSX = () => {
    return (
        <div className="wrapper">
            <h1>Hello React 🚀</h1>
            <h2>It's an example of put React element into Functional Component 😏</h2>
            {placeholderParagraph}
        </div>
    )
}

root.render(<ReactElementInsideJSX />);