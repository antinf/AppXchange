import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
//import components
import Store from './Store/Store';
import Login from './Account/Login';
import Footer from './App/Footer';
import Nav from './App/Nav';
import Orders from './Account/Orders';
import Register from './Account/Register';
//import css
import './index.css';
import SearchResults from './Store/SearchResults';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Router>
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/register' element={<Register />} />
        <Route path='/user/orders' element={<Orders />} />
        <Route path='/search/:query' element={<SearchResults />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();