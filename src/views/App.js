import React from 'react';
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
import Dashboard from './Dashboard/Dashboard.js';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {
  // 1. Khởi tạo dữ liệu tập trung tại đây
  state = {
    listUsersWithSalary: [
      { id: '1', name: 'Jhon', salary: 1000, email: 'john@mail.com', avatar: 'https://i.pravatar.cc/150?u=1' },
      { id: '2', name: 'Maria', salary: 2000, email: 'maria@mail.com', avatar: 'https://i.pravatar.cc/150?u=2' }
    ]
  }

  // 2. Hàm thêm nhân viên mới
  addNewSalaryUser = (user) => {
    this.setState({
      listUsersWithSalary: [...this.state.listUsersWithSalary, user]
    })
  }

  // 3. Hàm xóa nhân viên
  deleteSalaryUser = (user) => {
    let currentList = this.state.listUsersWithSalary.filter(item => item.id !== user.id);
    this.setState({ listUsersWithSalary: currentList });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <header className="App-header">
            <Nav />
            <img src={logo} className="App-logo" alt="logo" />



            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/todo">
                <ListToDo />
              </Route>
              <Route path="/salary">
                <Salary
                  listUsers={this.state.listUsersWithSalary}
                  addNewSalaryUser={this.addNewSalaryUser}
                  deleteSalaryUser={this.deleteSalaryUser}
                />
              </Route>
              <Route path="/user" exact>
                <ListUser />
              </Route>
              <Route path="/user/:id">
                <DetailUser listUsers={this.state.listUsersWithSalary} />
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
}

export default App;
