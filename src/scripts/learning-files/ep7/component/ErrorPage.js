import { useRouteError } from "react-router-dom"

export default ErrorPage = () => {
    const err = useRouteError();

    return <h1>Error</h1>
}