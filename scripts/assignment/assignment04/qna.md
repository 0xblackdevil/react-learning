## Assignment 04 question answer

### Is JSX mandatory for React?

- JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
- Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.
- The component can either be provided as a string, as a subclass of React.Component, or a plain function. If you get tired of typing React.createElement so much, one common pattern is to assign a shorthand:

```javascript
const e = React.createElement;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e("div", null, "Hello World"));
```

- If you use this shorthand form for React.createElement, it can be almost as convenient to use React without JSX.

### Is ES6 mandatory for React?

### How can I write comments in JSX?

### What is `<React.Fragment></React.Fragment>` and `<></>` ?

### What is Virtual DOM?

### What is Reconciliation in React?

When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another. However, the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

If we used this in React, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

Two elements of different types will produce different trees.
The developer can hint at which child elements may be stable across different renders with a key prop.
In practice, these assumptions are valid for almost all practical use cases.

**Diff algortithm** : Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. Going from `<a`> to `<img>`, or from `<Article>` to `<Comment>`, or from `<Button>` to `<div>` - any of those will lead to a full rebuild.

### What is React Fiber?

### Why we need keys in React? When do we need keys in React? Can we use index as keys in React?

inserting an element at the beginning has worse performance. For example, converting between these two trees works poorly:

```JSX
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

React will mutate every child instead of realizing it can keep the `<li>Duke</li>` and `<li>Villanova</li>` subtrees intact. This inefficiency can be a problem.

In order to solve this issue, React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key to our inefficient example above can make the tree conversion efficient:

```JSX
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

Now React knows that the element with key '2014' is the new one, and the elements with the keys '2015' and '2016' have just moved.

When that’s not the case, you can add a new ID property to your model or hash some parts of the content to generate a key. The key only has to be unique among its siblings, not globally unique.

As a last resort, you can pass an item’s index in the array as a key. This can work well if the items are never reordered, but reorders will be slow.

Reorders can also cause issues with component state when indexes are used as keys. Component instances are updated and reused based on their key. If the key is an index, moving an item changes it. As a result, component state for things like uncontrolled inputs can get mixed up and updated in unexpected ways.

### What is props in React? Ways to

### What is a Config Driven UI ?
