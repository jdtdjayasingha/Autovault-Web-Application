import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './pages/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
	<Routes>
	  <Route path='/' element={<App />} />
    <Route path='/user' element={<User />} />
	</Routes>
  </BrowserRouter>
);
