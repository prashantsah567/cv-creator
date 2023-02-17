import React, {Component} from "react";
import PreviewBio from "./Preview-bio";

class PreviewCV extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="previewCV">
                <h1 className="header">Preview - CV section</h1>
                <hr/>
                <PreviewBio bioText={this.state.bioText} />
            </div>
        )
    }
}

export default PreviewCV;