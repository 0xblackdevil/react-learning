import { useRouteError } from "react-router-dom"

export default ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return <h1>Error</h1>
}