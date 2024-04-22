## Assignment 03 question answer

#### What is JSX?

- Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function.

- JSX stands for JavaScript XML. It's a syntax extension for JavaScript, most commonly used with React to describe what the UI should look like. JSX might remind you of a template language, but it comes with the full power of JavaScript.

#### Superpowers of JSX

- **React Must Be in Scope** : Since JSX compiles into calls to React.createElement, the React library must also always be in scope from your JSX code.

- **Using Dot Notation for JSX Type** : This is convenient if you have a single module that exports many React components.

```javascript
import React from "react";

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  },
};

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

- **User-Defined Components Must Be Capitalized** : When an element type starts with a lowercase letter, it refers to a built-in component like <div> or <span> and results in a string 'div' or 'span' passed to React.createElement. Types that start with a capital letter like <Foo /> compile to React.createElement(Foo) and correspond to a component defined or imported in your JavaScript file.

#### Role of type attribute in script tag? What options can I use there?

#### `TitleComponent` vs `<TitleComponent/>` vs `<TitleComponent></TitleComponent>` in JSX

- `{TitleComponent}`
- `{<TitleComponent></TitleComponent>}` and `{<TitleComponent />}` are same.
- `{<TitleComponent />}` You can also use the self-closing form of the tag if there are no children. So:

## Topics which need to understand

- JSX
- React.createElement vs JSX
- Benefits of JSX
- Behind the Scenes of JSX
- Babel & parcel role in JSX
- Components
- Functional Components
  - Composing Components

## Additional Information

#### What is Babel

- Babel is a toolchain that is mainly used to convert `ECMAScript` 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

```

```
