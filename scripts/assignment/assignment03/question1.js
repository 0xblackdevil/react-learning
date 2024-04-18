import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const nestedElementUsingReactElement = React.createElement("div", { class: "title" }, [
    React.createElement('h1', null, "Hello World"),
    React.createElement('h2', null, "Hello World"),
    React.createElement('h3', null, "Hello World"),
]);

root.render(nestedElementUsingReactElement);

const nestedElementusingJSX = (
    <div className="title" xyz="abc">
        <h1>Hello World H1</h1>
        <h2>Hello World H2</h2>
        <h3>Hello World H3</h3>
    </div>
)

root.render(nestedElementusingJSX);

const FunctionComponent = () => {
    return <div className="title">
        <h1>Hello World H1 using function component</h1>
        <h2>Hello World H2 using function component</h2>
        <h3>Hello World H3 using function component</h3>
    </div>
}

root.render(<FunctionComponent />);

const CompositionOfComponent = () => {
    return <div className="container">
        <h1>Example of Composition of Components 🤯</h1>
        <div className="react-element sub-container">
            <h4>code of nested element using react.createElement</h4>
            {nestedElementUsingReactElement}
        </div>
        <div className="jsx-example sub-container">
            <h4>code of nested element using JSX</h4>
            {nestedElementusingJSX}
        </div>
        <div className="functional-componenet sub-container">
            <h4>code of nested element using Functional Component</h4>
            <FunctionComponent />
        </div>
    </div>
}

root.render(<CompositionOfComponent />)