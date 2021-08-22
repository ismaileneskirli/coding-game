import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

import CodeGameLogo from "images/CodeGameLogo.png";
import { useState } from "react";
import UserService from "./../../services/userService";
import SignedIn from "./SignedIn";
export default function LoginForm() {
  function shoot() {
    alert("Wrong Credentials");
  }

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let userService = new UserService();
  //   //when the page refreshes return new productService
  //   useEffect(() => {
  //     let userService = new UserService();
  //     userService
  //       .getByUserName(name)
  //       //if get method is successfull then for each result use setProduct method
  //       .then((result) => setUser(result.data));
  //   }, []);

  function login() {
    console.log(email, name, password);
    userService.getByUserName(name).then((result) => {
      console.log(result.data);
      if (result.data.password == password) {
        console.log("valid");
        setIsAuthenticated(true);
      } else {
        console.log("not valid");
        shoot();
      }
    });
  }
  return isAuthenticated ? (
    <SignedIn name={name} />
  ) : (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={CodeGameLogo} /> Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              name="email"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              name="Username"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Input
              name="password"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color="teal" fluid size="large" onClick={login}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
