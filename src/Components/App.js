import React from "react"
import Dashboard from "./Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"

function App() {
  return (
    <div>
       <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard}/>
    </Switch>
  </Router>
    </div>
  )
}

export default App