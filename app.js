import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {}, "It's h1 tag");
const sub_heading = React.createElement('h2', {}, "It's h2 tag");

const parent = React.createElement('div', { id: "parent" },
    [
        React.createElement('div', { id: "child1" }, [heading, sub_heading]),
        React.createElement('div', { id: "child2" }, [heading, sub_heading]),
    ]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);