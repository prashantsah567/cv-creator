import React,{Component} from "react"

class CreateCV extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="createCV">
                <form>
                    <h3 className="header">Please fill out these following informations</h3>
                    <div className="intro">
                        <input placeholder="Name"/>
                        <input placeholder="email" />
                        <input placeholder="contact" />
                        <input placeholder="location" />
                    </div>
                    <hr/>
                    <div>
                        <textarea placeholder="A short bio" required></textarea>
                    </div>
                    <div>
                        <h3>Education Section</h3>
                        <input placeholder="School or college name" className="Edu-Input"/><br/>
                        <input placeholder="Major" className="Edu-Input"/><br/>
                        <input placeholder="Start and end date" className="Edu-Input"/><br/>
                        <input placeholder="GPA" className="Edu-Input"/><br/>
                    </div>
                    <div>
                        <h3>Experience Section</h3>
                        <input placeholder="Job title" className="Edu-Input"/><br/>
                        <input placeholder="Company Name" className="Edu-Input"/><br/>
                        <input placeholder="Company location" className="Edu-Input"/><br/>
                        <input placeholder="start and end date" className="Edu-Input"/><br/>
                        <textarea placeholder="description" className="Edu-Input"/><br/>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateCV;