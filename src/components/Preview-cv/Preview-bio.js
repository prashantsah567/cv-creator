import React,{Component} from "react";

class PreviewBio extends Component{

    render(){
        return(
            <>
            <h3>{this.props.bioText}</h3>
            </>
        )
    }
}

export default PreviewBio;