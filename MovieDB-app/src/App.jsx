
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./components/common/Layout";
import HeroPage from "./components/Pages/HeroPage";
import SearchResult from "./components/Pages/SearchResult";
import ViewDetails from "./components/Pages/ViewDetails";
import NotFound from "./components/Pages/NotFound";
import PageLayout from "./components/common/PageLayout";
import Popular from "./components/Pages/Popular";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          index:true,
          element: <HeroPage />,
        }, 
        {
          path: "Popular",
          element: <Popular />,
        }, 
        {
          path: "search-result/:title",
          element: <SearchResult />,
        }, 
        {
          path: "detail/:type/:movieId",
          element: <ViewDetails />,
        }, 
        {
          path: "*",
          element: <NotFound />,
        }, 
      ]
    }
  ]);


function App() {
   return <RouterProvider router={router} />
}
export default App;