import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Collatz from './components/Collatz';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import MenuRutas from './components/MenuRutas';


export default class Router extends Component {
  render() {

    function CollatzParam(){
      var {numero} = useParams();
      return(
        <Collatz numeroColl={numero}/>
      )
    }

    return (
        <BrowserRouter>
            <MenuRutas/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/collatz/:numero" element={<CollatzParam/>}/>
              <Route path="/*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
