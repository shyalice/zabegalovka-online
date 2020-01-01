import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store"
import {Home} from "./Home/Home"
import Pizza from "./Pizza/Pizza";
 
class App extends Component{
    render(){
        return(
            <Router>
                <Provider store={store}>
                <Switch >
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/pizza">
                        <Pizza />
                    </Route>
                </Switch>
                </Provider>
            </Router>
        );
    }
}

export default App;