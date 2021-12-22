import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isClass : false,
      isFunction : false
    }
  }
  
  render(){
    const myStyle = {
        color : "red",
        textAlign : "center"
    }
    return(
      <div className='App'>
        <div>
          <h1 style={{color:"blue",textAlign:"center"}}>Styling using Class and Functional Components</h1>
        </div>
        <button style={{marginTop:"90px",height:"70px",width:"350px",border:"none", align: "center", backgroundColor:"blue", borderRadius:"8px",marginLeft:"300px",color:"white", fontSize:"15px"}}onClick={()=>this.setState({isClass:!this.state.isClass})}>Click to see Class Component</button>
        <button style={{marginTop:"90px",height:"70px",width:"350px",border:"none", align:"center", backgroundColor:"blue", borderRadius:"8px",marginLeft:"300px",color:"white",fontSize:"15px"}}onClick={()=>this.setState({isFunction:!this.state.isFunction})}>Click to see Function Component</button>

        {
          this.state.isClass
          ?
          <div style={{marginTop:"130px",height:"200px",width:"300px",backgroundColor:"skyblue",borderRadius:"7px",color:"yellow", marginLeft:"300px",paddingTop:"20px"}}>
            <h2 style={{color:"purple",textAlign:"center"}}>this is class component</h2>
            <p style={{color:"yellow",textAlign:"center"}}>this is inline class</p>
            <p style={myStyle}>this is internal css class</p>
          </div>
          :
          null
        }
        {
          this.state.isFunction
          ?
          <div style={{marginTop:"130px",height:"200px",width:"300px",backgroundColor:"skyblue",borderRadius:"7px",color:"yellow", marginLeft:"1000px",paddingTop:"20px"}}>
            <h2 style={{color:"purple",textAlign:"center"}}>this is Functional component</h2>
            <p style={{color:"yellow",textAlign:"center"}}>this is inline function</p>
            <p style={myStyle}>this is internal css function</p>
          </div>
          :
          null
        }
      </div>
    )
  }
}
export default App;
