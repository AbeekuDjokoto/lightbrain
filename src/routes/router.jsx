import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../layouts/home/HomeLayout";

import Home from "../pages/Home";
// import DetailedListing from "../pages/DetailedListing";
import { ROUTES } from "../utils/routes-contants";
import SearchResults from "../pages/SearchResults";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomeLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: ROUTES.SEARCH_RESULTS, element: <SearchResults /> },
    ],
  },
]);
