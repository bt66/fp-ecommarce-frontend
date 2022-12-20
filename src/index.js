import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import pages
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import HelpDesk from './pages/HelpDesk';
import UploadContent from './pages/UploadContent';
import ErrorPage from './pages/ErrorPage';
import UserDashboard from './pages/UserDashboard';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/HelpDesk",
    element: <HelpDesk />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Upload",
    element: <UploadContent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/userDashboard",
    element: <UserDashboard />,
    errorElement: <ErrorPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
