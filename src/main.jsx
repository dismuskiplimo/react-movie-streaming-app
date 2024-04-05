//import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

// TMDB credentials
const tmdb = {
  baseUrl: `https://api.themoviedb.org/3`,
  apiKey: `365763a878a8f9fe9ab725c84e864923`,
  readAccessToken: `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjU3NjNhODc4YThmOWZlOWFiNzI1Yzg0ZTg2NDkyMyIsInN1YiI6IjVmZGY5ZTcyM2M4ODdkMDA0MmFkMzdjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WwWxTk9TaROGm4jvsBOm44IHsJ-lWXleya0zu7K-jgs`,
};

// import the pages
import { NowPlaying, Search, Watch } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search tmdb={tmdb} />,
  },

  {
    path: "/watch/:type/:id",
    element: <Watch tmdb={tmdb} />,
  },

  {
    path: "/now-playing",
    element: <NowPlaying tmdb={tmdb} />,
  },

  {
    path: "/search/:query",
    element: <Search tmdb={tmdb} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
);