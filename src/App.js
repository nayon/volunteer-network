import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import PrivateRoute from './Components/PrivateRoute';
import SingleUserEvents from './Components/Pages/Events/SingleUserEvents';
import EventList from './Components/Pages/Events/EventList';
import NotMatch from './Components/NotMatch';
import DeleteNote from './Components/Pages/DeleteNote';
import AdminForm from './components/Pages/Admin/AdminForm';


export const UserContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://nameless-thicket-49062.herokuapp.com/events')
      .then(res => res.json())
      .then(data => setData(data))

    fetch('https://nameless-thicket-49062.herokuapp.com')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])

  return (
    <UserContext.Provider value={{ value1: [data, setData], value2: [loggedInUser, setLoggedInUser], value3: [events, setEvents] }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/userEvents">
            <SingleUserEvents />
          </Route>
          <Route path="/events">
            <EventList />
          </Route>
          <Route path="/admin">
            <AdminForm />
          </Route>
          <Route path="/delete">
            <DeleteNote />
          </Route>
          <PrivateRoute path="/title/:cardTitle">
            <Register />
          </PrivateRoute>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;