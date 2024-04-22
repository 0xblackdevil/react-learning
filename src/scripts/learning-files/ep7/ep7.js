/**
 * useEffect:
 *  - if there is no dependency array, then it will run at every render.
 *  - if there is an empty dependency array, then it will run only once at inital render.
 *  - if there is a dependency array, then it will run at every render if any of the dependency value changes.
 * 
 * useState:
 *  - useState is not declared in the useEffect callback function.
 *  - also not declared in the if condition, loop and nested functions.
 */