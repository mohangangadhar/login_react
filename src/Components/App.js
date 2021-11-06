import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SignInSide from "./Login-New";
import VerifyCoupon from "./VerifyCoupon";

function App() {
  return (
    <div>
       <Router>
    <Switch>
      <Route exact path="/" component={SignInSide} />
      <Route path="/dashboard" component={VerifyCoupon}/>
    </Switch>
  </Router>
    </div>
  )
}

export default App