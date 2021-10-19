import React from 'react'
import { useHistory } from 'react-router';
import {auth} from "../firebase"
function Dashboard() {
  const history = useHistory();
  const signOut = ()=>{
    auth.signOut();
    history.replace("/");
  }
  return (
    <div>
      <h2>Hiiii</h2>
      <button onClick={signOut}>Logout</button>
    </div>
  )
}

export default Dashboard
