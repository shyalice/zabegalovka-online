import React, { Component } from "react";
import {Promotions} from "./Promotions";

class Home extends Component{
    render(){
        return(
            <div className="container">
                <h1>Home page</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit aut quidem, vitae deleniti assumenda rerum iusto laudantium id vero ipsum!</p>
                <Promotions />
                <section>
                    <h2>Tops of the week!!!</h2>
                </section>
            </div>
        );
    }
}

export default Home;