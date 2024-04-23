## Assignment 07 question answer

#### What are various ways to add images into our App? Explain with code examples.

First of all wrap the src in {}
Then if using Webpack; Instead of: `<img src={"./logo.jpeg"} />`
You may need to use require:

`<img src={require('./logo.jpeg')} />`

Another option would be to first import the image as such:

`import logo from './logo.jpeg'; // with import`

or ...

`const logo = require('./logo.jpeg'); // with require` then plug it in...

`<img src={logo} />`

I'd recommend this option especially if you're reusing the image source.

#### What would happen if we do console.log(useState())?

`Error`: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
   See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

#### How will useEffect behave if we don't add a dependency array ?

#### What is SPA?

#### What is difference between Client Side Routing and Server Side Routing?
