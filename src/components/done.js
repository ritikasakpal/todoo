import React from "react";
import {NavLink} from "react-router-dom"
import {db } from "../firebase";
import "./Header.css"
import {Blob} from "./Blob"
    

export class Done extends React.Component{
    constructor(){
        super();
        this.state={
          alll:[],
        }
        this.titleref=React.createRef()
        this.discref=React.createRef()
        this.renderAll()
      }
       renderAll= () =>{
        var Allrender=[]
        var i=1;
        db.collection("tasks").get().then(data=>{
          data.docs.forEach(task=>{
              if(task.data().status=="done"){
            Allrender.push(<Blob key={i} no={i} action={this.renderAll.bind(this)} title={task.data().title} disc={task.data().disc} status={task.data().status} />)}
            i++
          })
          this.setState({alll:Allrender})
        })
       
      }
    
      render() {
        return (
          <div>
   <div className="header" >
        <NavLink to="/all" className="tabs ">ALL</NavLink>
        <div className="tabs selected">DONE</div>
        <NavLink to="/active" className="tabs ">ACTIVE</NavLink>
          </div>
    {this.state.alll}
   
    </div>
        );
      }

}