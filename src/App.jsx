import PWA from '@screens/PWA';
import ReactGA from 'react-ga';
import Home from '@screens/Home';
import Team from '@screens/Team';
import Root from '@screens/Root';
import About from '@screens/About';
import Admin from '@screens/Admin';
import Page404 from '@screens/404';
import Nav from '@components/Nav/Nav';
import React, { useEffect } from 'react';
import { createBrowserHistory } from 'history';
import Footer from '@components/Footer/Footer';
import PrivateRoute from '@components/PrivateRoute';
import { NoteProvider } from '@contexts/NoteProvider';
import SaveFacultyAndSemester from '@screens/SaveFacultyAndSemester';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'extended-normalize.css';
import './assets/sass/style.scss';
import Note from '@screens/Note';

const history = createBrowserHistory();

export default function App() {
  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      ReactGA.initialize('UA-195205173-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
    } else {
      console.log('not registering analytics on development mode');
    }
  }, []);

  return (
    <Router history={history}>
      <NoteProvider>
        <Nav />
      </NoteProvider>
      <Switch>
        <Route exact path="/">
          <Root history={history} />
        </Route>
        <PrivateRoute
          component={SaveFacultyAndSemester}
          path="/save-faculty-and-semester"
          condition="newUser"
          history={history}
        />
        <Route exact path="/home">
          <NoteProvider>
            <PrivateRoute
              component={Home}
              path="/home"
              condition="existingUser"
              history={history}
            />
          </NoteProvider>
        </Route>
        <Route exact path="/notes/:faculty/:semester/:subject/:unit">
          <NoteProvider>
            <PrivateRoute
              component={Note}
              path="/notes/:faculty/:semester/:subject/:unit"
              condition="correctSubscription"
              history={history}
            />
          </NoteProvider>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/pwa">
          <PWA />
        </Route>
        <PrivateRoute
          component={Admin}
          path="/only-admin"
          condition="isAdmin"
          history={history}
        />
        <Route path="*" component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}
