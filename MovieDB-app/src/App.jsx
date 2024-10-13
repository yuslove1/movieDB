
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
          path: "search-result/:title",
          element: <SearchResult />,
        }, 
        {
          path: "detail/:movieId",
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