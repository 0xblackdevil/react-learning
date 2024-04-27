# Assignment 11 question answer

#### What is prop drilling?

- In React, `prop drilling` refers to the process of `passing down props` (short for properties) through multiple layers of nested components. This happens when a piece of data needs to be transferred from a higher-level component to a deeply nested child component, and it must pass through several intermediary components in between.

#### What is lifting the state up?

- Lifting state up in React refers to the practice of moving the state from a lower-level (child) component to a higher-level (parent or common ancestor) component in the component tree . This is done to share and manage state across multiple components.

- When a child component needs access to certain data or needs to modify the data, instead of keeping that data and the corresponding state management solely within the child component, we move the state to a shared ancestor component. By doing so, the parent component becomes the source of truth for the state, and it can pass down the necessary data and functions as props to its child components.

#### What is Context Provider and Context Consumer?

- In React, the Context API provides a way to pass data through the component tree without having to pass props manually at every level . The two main components associated with the Context API are the Context Provider and Context Consumer .

- Context Provider : The Context Provider is a component that allows its children to subscribe to a context's changes . It accepts a value prop, which is the data that will be shared with the components that are descendants of this provider. The Provider component is created using React.createContext() and then rendered as part of the component tree. It establishes the context and provides the data to its descendants.

- Context Consumer : The Context Consumer is a component that subscribes to the changes in the context provided by its nearest Context Provider ancestor. It allows components to access the context data without the need for prop drilling. The Consumer component is used within the JSX of a component to consume the context data. It takes a function as its child, and that function receives the current context value as an argument.

- By using the Context Provider and Context Consumer, you can avoid prop drilling and make it easier to share global or shared state across different parts of your React application. This is particularly useful when passing data to deeply nested components without explicitly passing the data through each intermediate component.

#### If you don’t pass a value to the provider does it take the default value?

- Yes, If we don't pass a value to the Provider in React's Context API, it does use the default value specified when creating the context using React.createContext(defaultValue) .
