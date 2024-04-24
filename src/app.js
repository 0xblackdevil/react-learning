import "./master.scss"

import ReactDOM from 'react-dom/client';
import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout";
import ErrorPage from "./component/ErrorPage";
import BodyComponent from "./component/BodyComponent";
import OfferComponent from "./component/OfferComponent";
import HelpComponent from "./component/HelpComponent";
import RestroMenuPage from "./component/restaurant/RestroMenuContainer";
const AboutComponent = lazy(() => import("./component/AboutClass"));


const root = ReactDOM.createRoot(document.getElementById('root'));
const copyRightYear = 2024;
const appRoute = createBrowserRouter([
    {
        path: "/", element: <AppLayout />, errorElement: <ErrorPage />,
        children: [
            { path: "", element: <BodyComponent /> },
            { path: "about", element: <Suspense fallback={<h1>Loading !!!</h1>}> <AboutComponent _CpRightYear={copyRightYear} /> </Suspense> },
            { path: "offer", element: <OfferComponent /> },
            { path: "help", element: <HelpComponent /> },
            { path: "restorants/:id", element: <RestroMenuPage /> }
        ]
    },
]);

root.render(<RouterProvider router={appRoute} />);
