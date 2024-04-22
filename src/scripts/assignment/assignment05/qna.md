## Assignment 05 question answer

#### What is the difference between Named Export, Default export and \* as export?

- Named exports are useful when you have multiple entities to export, while default exports are suitable for a single, primary entity.

#### What is the importance of config.js file

- The config. js file provides access to Webpack configuration options in Next. js projects. Webpack is a powerful bundler tool used to compile JavaScript modules, assets, and resources for web applications.

#### What are React Hooks?

- React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks:

  1. UseState() - To manage states. Returns a stateful value and an updater function to update it.

  2. UseEffect() - To manage side-effects like API calls, subscriptions, timers, mutations, and more

  3. UseContext() - To return the current value for a context.

  4. UseReducer() - A useState alternative to help with complex state management.

  5. UseCallback() - It returns a memorized version of a callback to help a child component not re-render unnecessarily.

  6. UseMemo() - It returns a memoized value that helps in performance optimizations.

  7. UseRef() - It is mainly used to access a child component imperatively.

  8. UseLayouteffect() - It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.

  9. useDebugValue() - Helps to display a label in React DevTools for custom hooks.

#### Why do we need a useState Hook?

- The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.
