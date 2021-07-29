import React, {useEffect} from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Router from './components/Router';
import NavBar from './components/NavBar';

import routes, { routePath } from './routes';

const navLinks = [
  { 
    text: 'Pattho Dhara', 
    href: routePath('home'), 
    type: 'brand'
  }
];

export default function App(props) {

  useEffect(()=>routePath('lecture'),[])

  return <Provider store={store}>
    <Router routes={routes}>
      <NavBar links={navLinks} />
    </Router>
  </Provider>
}