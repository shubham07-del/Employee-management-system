import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthData } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthData);

  useEffect(
    function () {
      if (userData) {
        const loggedIn = localStorage.getItem("loggedIn");
        if (loggedIn) {

          
          const userDataCopy = JSON.parse(loggedIn);
          setUser(userDataCopy.role);
          if (userDataCopy.role === "employee" && userData.length > 0) {
            const currentUser = userData.find((e) => e.name === userDataCopy.data.name);
            if (currentUser) {
              setLoggedInUserData(currentUser);
            }
          } else {
            setLoggedInUserData(userDataCopy.data);
          }
        }
      }
    },
    [userData]
  );

  const handleLogin = (mail, password) => {
    if (mail == "admin@me.com" && password == "123456") {
      localStorage.setItem("loggedIn", JSON.stringify({ role: "admin", data: { name: "Admin" } }));
      setUser("admin");
      setLoggedInUserData({ name: "Admin" });
    } else if (
      userData &&
      userData.find((e) => mail == e.email && password == e.password)
    ) {
      const employee = userData.find((e) => mail == e.email && password == e.password);
      localStorage.setItem("loggedIn", JSON.stringify({ role: "employee", data: employee }));
      setUser("employee");
      setLoggedInUserData(employee);
    } else {
      alert("Invalid Credential");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "admin" ? <AdminDashboard setUser={setUser} data={loggedInUserData} /> : null}
      {user === "employee" ? <EmployeeDashboard setUser={setUser} data={loggedInUserData} /> : null}
    </>
  );
};

export default App;
