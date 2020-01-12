import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";

import store from "./redux/store";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Pizza from "./components/Pizza/Pizza";
import Burgers from "./components/Burgers/Burgers";
import Drinks from "./components/Drinks/Drinks";
import Cart from "./components/Cart/Cart";
import "./styles/_general.scss"
 
class App extends Component{
    render(){
        return(
            <Router>
                <Provider store={store}>
                    <Navigation />
                    <Switch >
                        <Route exact path="/" component={Home} />
                        <Route path="/pizza" component={Pizza}/>
                        <Route path="/burgers" component={Burgers}/>
                        <Route path="/drinks" component={Drinks}/>
                        <Route exact path="/cart" component={Cart} />
                    </Switch>
                </Provider>
            </Router>
        );
    }
}

export default App;