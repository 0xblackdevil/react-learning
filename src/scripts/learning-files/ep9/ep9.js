import HeaderComponent from "../ep5/component/HeaderComponent"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import UserContext from "../ep11/utils/UserContext"
import { Provider } from "react-redux"
import appStore from "../ep12/utils/app"


/**
 * What is modular programming?
 *  Modular programming is a software design technique that emphasizes separating the functionality of 
 *  a program into independent, interchangeable modules, such that each contains everything necessary to execute 
 *  only one aspect of the desired functionality.
 * 
 * Why do this?
 *  - Easier to maintain
 *  - Easier to test
 *  - Code becomes reusable
 * 
 * Hook is just an utility function that allows you to use state and other React features without writing a class.
 * 
 * coustomeHooks are not mendetory to use but it is a good practice to use them.
 *  - It makes the code more readable
 *  - It makes the code more reusable
 *  - It makes the code more modular
 *  - It makes the code more testable
 * 
 * Explor about linters
 * 
 * chunking || code splitting
 *  - Dynamic bundling
 *  - lazy loading || on-demand loading
 * 
 * refer `~/src/app.js` for code implementation
 *  - first, we have to import the `Suspense` and `lazy` from react
 *  - then we need to dynamically import the component using `lazy` function
 *  - then we need to wrap the component in `Suspense` component
 *  - then we need to provide a fallback component to the `Suspense` component
 *  - then we can use the component as a normal component
 */



export default EP9Learning = () => {

    const [user, setUser] = useState('Demon');
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: user, setUser }}>
                <div className='app'>
                    <HeaderComponent />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}