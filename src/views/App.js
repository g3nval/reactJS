import logo from './logo.svg';
import './App.scss';
import Salary from './Salary/Salary';
import ListToDo from './ToDos/ListToDo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home/Home.js';
import ListUser from './Users/ListUser.js';
import Nav from './Nav/Nav.js';
import DetailUser from './Users/DetailUser.js';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />


          {/* <MyComponent /> */}
          {/* <ListToDo /> */}

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/salary">
              <Salary />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>


        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClickrtl={false}
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
