import "./master.scss"

import ReactDOM from 'react-dom/client';
import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout";
import ErrorPage from "./components/ErrorPage";
import BodyComponent from "./components/BodyComponent";
import OfferComponent from "./components/OfferComponent";
import HelpComponent from "./components/HelpComponent";
import RestroMenuPage from "./components/restaurant/RestroMenuContainer";
const AboutComponent = lazy(() => import("./components/AboutClass"));


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
