import React, { Component } from "react";

class Ingredients extends Component{
    render(){
        return(
            <div>
                <h4 style={{border:"2px solid red"}}>ingredients:</h4>
                <div style={{border:"1px solid red"}}>
                    {this.props.ingredients.map((ingredient)=>{
                        return(
                            <p key={'ingredient_' + Math.random().toString(36).substr(2, 9)}>{ingredient}</p>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Ingredients;