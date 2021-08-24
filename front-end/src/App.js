import "./App.css";
import Register from "components/Register";
import { useState, useEffect } from "react";
import Home from "components/Home";
import LoginForm from "./components/LoginForm";
import UserService from "services/userService";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    password: "",
    points: 0,
    wins: 0,
    loses: 0,
  });
  const [error, setError] = useState("");

  //pass function as parameter to child component
  const Login = (user) => {
    console.log(user);

    let userService = new UserService();
    userService.getByUserName(user.name).then((result) => {
      if (
        user.name == result.data.name &&
        user.password == result.data.password
      ) {
        console.log("logged in");
        setUser({
          name: result.data.name,
          password: result.data.password,
          points: result.data.points,
          wins: result.data.wins,
          loses: result.data.loses,
        });
        setIsLoggedIn(true);
      } else {
        console.log("Wrong credentials");
        setError("Wrong credentials");
      }
    });
  };

  const Logout = () => {
    setIsLoggedIn(false);
    setUser({ name: "", password: "", points: 0, wins: 0, loses: 0 });
  };
  //

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home user={user} Logout={Logout} />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
