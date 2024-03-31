import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/TaskList";
import UserForm from "./components/TaskInput";
import EditUser from "./components/TaskInput/edituser";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/edit-user/:id"
            element={<EditUser/>} />


          <Route
            exact
            path="/"
            element={<UserForm />}
          />
          <Route
            exact
            path="/userlist"
            element={<UserList />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
