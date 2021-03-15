import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from '../style/GlobalStyle';
import { Navbar } from '../component/Navbar/Navbar';
import { NotFound } from './NotFound';
import { Country } from './Country';

export function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Country} />
          {/* <Route exact path="/blog/:id" component={} /> */}
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </React.Fragment>
  );
}
