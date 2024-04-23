/**
 * Javascript is an sincronous single threaded language.
 * 
 * useEffect:
 *  - if there is no dependency array, then it will run at every render.
 *  - if there is an empty dependency array, then it will run only once at inital render.
 *  - if there is a dependency array, then it will run at every render if any of the dependency value changes.
 * 
 * useState:
 *  - useState is not declared in the useEffect callback function.
 *  - also not declared in the if condition, loop and nested functions.
 * 
 * This episode is about the routers in React. We will use the react-router-dom package.
 * we need to configure the routes in the App.js file. refer app.js
 * React-Router-Dom provide us the useRouterError hook to handle the error page.
 * 
 * Single page application is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server.
 * 
 * There are two types of routing:
 *  1. Client side routing 
 *      - In client side routing, the server sends only the required data to the client.
 *  2. Server side routing
 *      - In server side routing, the server sends the entire page to the client.
 * 
 * - useRouteError is a hook provided by the react-router-dom package.
 * 
 * - Link is an component which is provided by the react-router-dom package, behind the scene it uses the anchor tag.
 * - Link is a wrapper over the anchor tag.
 */

import { Outlet } from "react-router-dom"
import HeaderComponent from "../ep5/component/HeaderComponent"

export default EP7Learning = () => {
    return (
        <div className='app'>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}


