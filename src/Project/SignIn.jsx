// src/components/SignIn.js
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("First Name:", FirstName);
    console.log("Last Name:", LastName);
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: 20, maxWidth: 400, margin: "auto", marginTop: 50 }}
    >
      <div>
        <center>
          {" "}
          <Typography component="h3" variant="h3">
            Welcome
          </Typography>
          <p>Please sign up to continue</p>
        </center>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="FirstName"
            label="First Name"
            name="FirstName"
            type="FirstName"
            value={FirstName}
            onChange={handleFirstNameChange}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="LastName"
            label="Last Name"
            name="LastName"
            type="LastName"
            value={LastName}
            onChange={handleLastNameChange}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </div>
    </Paper>
  );
};

export default SignIn;
