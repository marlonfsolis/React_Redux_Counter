import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App(props) {

    console.log(props);

    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
}

export default App;
