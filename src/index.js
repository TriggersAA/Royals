import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import ContactUs from './ContactUs'
import reportWebVitals from './reportWebVitals';
import {HashRouter ,Routes, Route } from 'react-router-dom';
import Navig from './Navig';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([{path: "/", element : <Home />},
//   {path:"/ContactUs" ,element :<ContactUs />}
// ])
root.render(
  
  <React.StrictMode>
    
    <HashRouter>
    <Navig/>
      <Routes>
        <Route path="/" element = {<Home />}/>

        <Route path="/ContactUs" element = {<ContactUs />}/>
        
      </Routes>
  </HashRouter>

{/* <RouterProvider router={router}/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
