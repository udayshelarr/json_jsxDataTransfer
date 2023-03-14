import React from "react";
import { Component } from "react";
import Student from "./statesFunction/Students";
import JSON from "./statesFunction/Student.json"

class App1 extends Component
{
    constructor()
    {
        super();
        this.state={json:JSON}
    }
    render(){
        return(
           <Student data={this.state.json}/>
        )
    }
}
export default App1