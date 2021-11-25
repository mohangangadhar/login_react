import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SignInSide from "./Login-New";
import VerifyCoupon from "./VerifyCoupon";
import {ConfirmProvider} from "material-ui-confirm";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <ConfirmProvider>
                        <Route exact path="/" component={SignInSide}/>
                        <Route path="/dashboard" component={VerifyCoupon}/>
                    </ConfirmProvider>
                </Switch>
            </Router>
        </div>
    )
}

export default App