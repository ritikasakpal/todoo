import React from "react";
import {NavLink} from "react-router-dom"
import {db } from "../firebase";
import "./Header.css"
import {Blob} from "./Blob"
    

export class All extends React.Component{
    constructor(){
        super();
        this.state={
          alll:[],
          add:false,
          
        }
        this.titleref=React.createRef()
        this.discref=React.createRef()
        this.renderAll()
      }
      Addnewtask(){
    var newtitle=this.titleref.current.value
    var newdisc=this.discref.current.value
    db.collection("tasks").get().then(data=>{
      var no=data.docs.length
    db.collection("tasks").doc((no+1).toString()).set({
      title:newtitle,
      disc:newdisc,
      status:"active"
    }).then(s=>{ this.renderAll()
      this.setState({
        add:false
       })
    })
    })
      }
       renderAll= () =>{
         console.log("called")
        var Allrender=[]
        var i=1;
        db.collection("tasks").get().then(data=>{
          data.docs.forEach(task=>{
            Allrender.push(<Blob key={i} no={i++} action={this.renderAll.bind(this)} title={task.data().title} disc={task.data().disc} status={task.data().status} />)
          })
          this.setState({alll:Allrender})
        })
       
      }
    
      render() {
        var addInner=<div ></div>
        if(this.state.add==false){
          addInner=  <div className="blob-inner-button" onClick={a=> {this.setState({
            add:true
                })}}>
          ADD A NEW TODO</div>
        } 
        else{
          addInner=    <div >
          <input type="text" ref={this.titleref}  className="blob-text" placeholder="Type Todo title"></input>
          <textarea type="text" rows="3" ref={this.discref} className="blob-text area" placeholder="Describe your Todo..."></textarea>
          <div className="blob-bottom">
          <div className="one" onClick={a=>{this.setState({
         add:false
        })}}> CANCEL</div>
          <div onClick={()=> this.Addnewtask()}>SAVE</div>
          </div>
                </div>
        }
        return (
          <div>
   <div className="header" >
        <div className="tabs selected">ALL</div>
        <NavLink to="/done" className="tabs">DONE</NavLink>
        <NavLink to="/active"className="tabs">ACTIVE</NavLink>
          </div>
    {this.state.alll}
          <div className="blob action">
       {addInner}
          <div className="blob-edit"></div>
          </div>
    </div>
        );
      }

}