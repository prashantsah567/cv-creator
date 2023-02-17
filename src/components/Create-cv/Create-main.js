import React,{Component} from "react";

export default class CreateMain extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="mainContainer">
                <div className="mainSection1">
                    <h3>Skills:</h3>
                    <input className="skillInput" />
                    <button>Add</button>
                </div>
                <div className="mainSection2">
                    <div>
                        <h3>Education Section</h3>
                        <input placeholder="School or college name" className="Edu-Input"/><br/>
                        <input placeholder="Major" className="Edu-Input"/><br/>
                        <input placeholder="Start and end date" className="Edu-Input"/><br/>
                        <input placeholder="GPA" className="Edu-Input"/><br/>
                        <button>Add</button><button>Delete</button>
                    </div>
                    <div>
                        <h3>Experience Section</h3>
                        <input placeholder="Job title" className="Edu-Input"/><br/>
                        <input placeholder="Company Name" className="Edu-Input"/><br/>
                        <input placeholder="Company location" className="Edu-Input"/><br/>
                        <input placeholder="start and end date" className="Edu-Input"/><br/>
                        <textarea placeholder="description" className="Edu-Input"/><br/>
                        <button>Add</button><button>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}