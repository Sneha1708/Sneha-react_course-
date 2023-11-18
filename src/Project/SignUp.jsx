// src/components/SignIn.js
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Sign Up
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <center>
            <Typography component="h3" variant="h3">
              Welcome
            </Typography>
            <p>Please sign up to continue</p>
          </center>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              type="text"
              value={lastName}
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

            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignUp;
/*/
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showForm, setShowForm] = useState(false);

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
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  };

  const handleSignUpButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignUpButtonClick}
      >
        Sign Up
      </Button>

      {showForm && (
        <Paper
          elevation={3}
          style={{ padding: 60, maxWidth: 400, margin: "auto", marginTop: 50 }}
        >
          <div>
            <center>
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
                id="firstName"
                label="First Name"
                name="firstName"
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                type="text"
                value={lastName}
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

              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default SignIn;
/*/
/*/ 
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
//mport DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

function SignIn() {
  const [open, setOpen] = useState(false);
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUpClick = () => {
    // Perform signup logic here
    // For simplicity, just closing the dialog in this example
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFirstname("");
    setLastname("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} data-testid="signup">
        Sign Up
      </Button>
      <Paper
        elevation={3}
        style={{
          padding: 60,
          maxWidth: 400,
          margin: "auto",
          marginTop: 50,
        }}
      >
        <Dialog open={open} onClose={handleClose}>
          <center>
            <h3>Welcome</h3>

            <p>Please Sign Up to Continue</p>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="Firstname"
                label="First name"
                type="text"
                fullWidth
                value={Firstname}
                onChange={handleFirstnameChange}
                data-testid="signup-firstname"
              />
              <TextField
                autoFocus
                margin="dense"
                id="Lastname"
                label="Last name"
                type="text"
                fullWidth
                value={Lastname}
                onChange={handleLastnameChange}
                data-testid="signup-Lastname"
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                data-testid="signup-password"
              />
              <TextField
                margin="dense"
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                data-testid="confirm-password"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} data-testid="cancel">
                Cancel
              </Button>
              <Button onClick={handleSignUpClick} data-testid="signup-submit">
                Sign Up
              </Button>
            </DialogActions>
          </center>
        </Dialog>
      </Paper>
    </div>
  );
}

export default SignIn;/*/

/*/import React, { useState } from "react";
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
      style={{ padding: 60, maxWidth: 400, margin: "auto", marginTop: 50 }}
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

export default SignIn;/*/
