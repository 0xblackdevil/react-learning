import React from 'react';
import HeaderComponent from '../ep5/component/HeaderComponent';
import BodyComponent from './component/BodyComponent';

/**
 * Monolith Architecture
 *  - Single codebase for the entire application
 * 
 * Microservices Architecture
 *  - Also known as saparation of concerns
 *  - Singel responsibility principle, so each service is responsible for a single thing
 *  - Multiple services that work together
 * 
 * There are 2 approaches to fatch the data from the server
 *  1. When app load => Fetch all the data => Rendering to the UI
 *  2. When app load => Render the UI => Fetch the data => Re-render the UI
 * 
 * Whenevey the state variable like useState update the react trigger a reconciliation cycle(re-render the component)
 */

export default EP6Learning = () => {
    return (
        <div className='app'>
            <HeaderComponent />
            {/* enable for lecture reference */}
            <BodyComponent />
        </div>
    )
}