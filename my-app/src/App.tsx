import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import './App.scss';
import { Header } from './components/Header/header';
import Banner from './components/Banner/Banner';
import Images from './constants/Images';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;