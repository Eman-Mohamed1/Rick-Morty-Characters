import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterDetails from '../src/screens/character/index'
import Home from '../src/screens/Home/index';
import {Provider} from 'react-redux';
import { store } from "./redux/store";
function App() {
  return (
    <div className="main">
 <Provider store={store}> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={`/:id`} element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
  </Provider>
    </div>
  );
}

export default App;