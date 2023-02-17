import React,{Component} from "react";

export default class CreateHeader extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="intro">
                <input placeholder="Name"/>
                <input placeholder="email" />
                <input placeholder="contact" />
                <input placeholder="location" />
            </div>
        );
    }
}