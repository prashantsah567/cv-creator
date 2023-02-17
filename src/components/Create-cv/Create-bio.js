import React, {Component} from "react";
import PreviewBio from "../Preview-cv/Preview-bio";

export default class CreateBio extends Component{
    constructor(){
        super();

        this.state = {
            bioText: ''
        }
    }

    handleBioChange = (e) =>{
        this.setState({
            bioText: e.target.value
        })
    }

    render(){
        return(
            <>
                <div>
                    <textarea 
                    className="bio"
                    placeholder="A short bio" 
                    value={this.state.bioText}
                    onChange={this.handleBioChange}
                    type="text"
                    required />
                </div>
            </>
        )
    }
}