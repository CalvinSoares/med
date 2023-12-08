import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import SectionOne from './components/Hero/SectionOne';
import Registro from './components/RegistroLogin/Registro';
import Layout from './Layout/Layout';
import Login from './components/RegistroLogin/Login';


export const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/layout' element={<Layout />} />
        <Route path='/header' element={<Header />} />
        <Route path='/sectionone' element={<SectionOne />} />
        

        
        <Route index element={<Navigate to="/layout" />} />
      </Routes>
    </Router>
  )
}
