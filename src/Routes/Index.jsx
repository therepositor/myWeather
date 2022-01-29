import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import DisplayForcast from '../components/DisplayForcast';

const Index = ({onClick, onChange, forecasts, searchInput, error}) => (
    <BrowserRouter>
        <Header onClick={onClick} onChange={onChange}></Header>
        <Routes>
            <Route path='/' exact element={<DisplayForcast error={error} searchInput={searchInput} forecasts={forecasts} />}/>
        </Routes>
    </BrowserRouter>
)
  


export default Index;


