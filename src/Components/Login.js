import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box  from "@mui/material/Box";
import "./Login.css"
import { TextField } from "@mui/material";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (user) history.replace("/dashboard");
  }, [user]);
  return (
    <Box className="login">
      <Card className="login__container">
        <CardContent className="cardcontent">
        <TextField margin="dense" fullWidth
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <TextField  fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
            </CardContent>
        <CardActions className="actions">
        <Button variant="contained"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </Button>
        </CardActions>
    
      </Card>
    </Box>
  );
}
export default Login;