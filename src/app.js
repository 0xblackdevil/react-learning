import "./master.scss"

import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EP7Learning from './scripts/learning-files/ep7/ep7';
import ErrorPage from "./scripts/learning-files/ep7/component/ErrorPage";

import OfferComponent from "./scripts/learning-files/ep7/component/OfferComponent";
import HelpComponent from "./scripts/learning-files/ep7/component/HelpComponent";
import BodyComponent from "./scripts/learning-files/ep6/component/BodyComponent";
import RestroMenuPage from "./scripts/learning-files/ep7/component/RestroMenu/RestroMenuContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRoute = createBrowserRouter([
    {
        path: "/", element: <EP7Learning />, errorElement: <ErrorPage />,
        children: [
            { path: "", element: <BodyComponent /> },
            { path: "offer", element: <OfferComponent /> },
            { path: "help", element: <HelpComponent /> },
            { path: "restorants/:id", element: <RestroMenuPage /> }
        ]
    },
]);

root.render(<RouterProvider router={appRoute} />);
