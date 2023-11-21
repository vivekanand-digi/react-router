import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/pages/Layout';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import UserList from './components/pages/UserList';
import User from './components/pages/User';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
          path:"",
          element:<UserList/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"profile",
        element:<Profile/>
      },
      {
        path:"/user/:id",
        element:<User />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <BrowserRouter> */}
    {/* <App /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

