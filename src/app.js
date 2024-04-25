import ReactDOM from 'react-dom/client';
import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import EP7Learning from './scripts/learning-files/ep7/ep7';
import Ep9Learning from "./scripts/learning-files/ep9/ep9";
import ErrorPage from "./scripts/learning-files/ep7/component/ErrorPage";

import OfferComponent from "./scripts/learning-files/ep7/component/OfferComponent";
import HelpComponent from "./scripts/learning-files/ep7/component/HelpComponent";
// import BodyComponent from "./scripts/learning-files/ep6/component/BodyComponent";
import BodyComponent from "./scripts/learning-files/ep11/component/BodyComponent";
// import RestroMenuPage from "./scripts/learning-files/ep7/component/RestroMenu/RestroMenuContainer";
import RestroMenuPage from "./scripts/learning-files/ep9/component/RestroMenuContainer";
import About from "./scripts/learning-files/ep8/component/About";
// import AboutClassComponent from "./scripts/learning-files/ep8/component/AboutClass";
const AboutClassComponent = lazy(() => import("./scripts/learning-files/ep8/component/AboutClass"));


const root = ReactDOM.createRoot(document.getElementById('root'));
const copyRightYear = 2024;
const appRoute = createBrowserRouter([
    {
        path: "/", element: <Ep9Learning />, errorElement: <ErrorPage />,
        children: [
            { path: "", element: <BodyComponent /> },
            { path: "aboutfun", element: <About _CpRightYear={copyRightYear} /> },
            { path: "about", element: <Suspense fallback={<h1>Loading !!!</h1>}> <AboutClassComponent _CpRightYear={copyRightYear} /> </Suspense> },
            { path: "offer", element: <OfferComponent /> },
            { path: "help", element: <HelpComponent /> },
            { path: "restorants/:id", element: <RestroMenuPage /> }
        ]
    },
]);

root.render(<RouterProvider router={appRoute} />);
