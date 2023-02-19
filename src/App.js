import React,{Component} from "react";
// import CreateCV from "./components/Create-cv/Create-cv";
// import PreviewCV from "./components/Preview-cv/Preview-cv";
import CreateHeader from "./components/Create-cv/Create-header"
import CreateMain from "./components/Create-cv/Create-main"
import "../src/Style.css";

class App extends Component {

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
  return (
    <div className="container">
      {/* <CreateCV /> */}
      <div className="createCV">
          <form>
              <h3 className="header">Please fill out these following informations</h3>
              <CreateHeader />
              <hr/>
              {/* <CreateBio /> */}

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
                {/* <PreviewBio bioText={this.state.bioText} /> */}
              </>

              <CreateMain />
          </form>
        </div>

      {/* <PreviewCV /> */}

      <div className="previewCV">
          <h1 className="header">Preview - CV section</h1>
          <hr/>
          {/* <PreviewBio/> */}
          <>
          <h3>{this.state.bioText}</h3>
          </>
      </div>
    
    </div>
  );
}
}
// class CreateCV extends Component{
//   constructor(){
//       super();
//   }

//   render(){
//       return(
//           <div className="createCV">
//               <form>
//                   <h3 className="header">Please fill out these following informations</h3>
//                   <CreateHeader />
//                   <hr/>
//                   <CreateBio />
//                   <CreateMain />
                  
//               </form>
//           </div>
//       );
//   }
// }

// class CreateBio extends Component{
//   constructor(){
//       super();

//       this.state = {
//           bioText: ''
//       }
//   }

//   handleBioChange = (e) =>{
//       this.setState({
//           bioText: e.target.value
//       })
//   }

//   render(){
//       return(
//           <>
//               <div>
//                   <textarea 
//                   className="bio"
//                   placeholder="A short bio" 
//                   value={this.state.bioText}
//                   onChange={this.handleBioChange}
//                   type="text"
//                   required />
//               </div>
//               <PreviewBio bioText={this.state.bioText} />
//           </>
//       )
//   }
// }


// class PreviewCV extends Component{
//   constructor(){
//       super();
//   }

//   render(){
//       return(
//           <div className="previewCV">
//               <h1 className="header">Preview - CV section</h1>
//               <hr/>
//               <PreviewBio/>
//           </div>
//       )
//   }
// }

// class PreviewBio extends Component{

//   constructor(props){
//     super(props)
//   }

//   render(){
//       return(
//           <>
//           <h3>{this.props.bioText}</h3>
//           </>
//       )
//   }
// }





export default App;
