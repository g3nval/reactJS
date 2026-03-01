import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import Nav from './Nav/Nav.js';
import Home from './Home/Home.js';
import Dashboard from './Dashboard/Dashboard.js';
import ListToDo from './ToDos/ListToDo';
import Salary from './Salary/Salary';
import ListUser from './Users/ListUser.js';
import DetailUser from './Users/DetailUser.js';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>

        <main className="App-main-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/todo" component={ListToDo} />
            <Route path="/salary" component={Salary} />
            <Route path="/user" exact component={ListUser} />
            <Route path="/user/:id" component={DetailUser} />
          </Switch>
        </main>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;