import React from "react";
import "./blob.css";
import { db } from "../firebase";
export class Blob extends React.Component{
    constructor(props){
        super()
        this.state={
            data:{
                title:props.title,
                disc:props.disc,
                status:props.status,
                no:props.no
            },
            edit:false
        }
        this.titleref=React.createRef()
        this.discref=React.createRef()
    }
    getfreshcopy(){
       db.collection("tasks").doc((this.state.data.no+0).toString()).get().then(doc=>{
           this.setState({
               data:{
                   title:doc.data().title,
                   disc:doc.data().disc,
                   status:doc.data().status
               },
               
           })
       })
    }
    Marktaskdone(){
        db.collection("tasks").doc((this.state.data.no + 0).toString()).set({
            status:"done"
        },{merge:true}).then(a=>{
            this.getfreshcopy()
            this.setState({
                edit:false
            })
        })
    }
    Savetask(){
        var newtitle=this.titleref.current.value
var newdisc=this.discref.current.value
        db.collection("tasks").doc((this.state.data.no+0).toString()).set(
            {disc:newdisc,title:newtitle},{merge:true}
        ).then(a=>{
            this.getfreshcopy()
            this.setState({
                edit:false
            })
        })
       
    }
  
    render(){
        var innerBlob
        if(this.state.edit===true){
            innerBlob=<div >
            <input type="text" ref={this.titleref}   className="blob-text" placeholder="Type Todo title" defaultValue={this.state.data.title}></input>
            <textarea type="text" rows="3" ref={this.discref} className="blob-text area" defaultValue={this.state.data.disc} placeholder="Describe your Todo..."></textarea>
            <div className="blob-bottom">
            <div className="one" onClick={A =>{  this.setState({
           edit:false
       })}}> CANCEL</div>
            <div onClick={()=>this.Savetask()}>SAVE</div>
            </div>
                  </div>
        }
        else{
            var actions=<div></div>;
        if(this.state.data.status==="active"){
            actions=<div ><div style={{border:"1px solid #4f4f4f",borderRadius:'4px',marginLeft:'8px'}} className="blob-action" onClick={()=>this.Marktaskdone()} >Mark As done</div>        
            <div className="blob-action" onClick={A=>{ this.setState({
           edit:true
        })}} >edit</div></div>;
        }
       
            innerBlob=   <div>
            <div className="blob-head">
            <div className="blob-title"> {this.state.data.title} </div>
             {actions}
            </div>
    
    
            <div className="blob-disc">{this.state.data.disc}
            </div>
            <div className="blob-status"> STATUS : {this.state.data.status.toUpperCase()}</div></div>
     
        }
       return( 
        <div className={"blob "+ this.state.data.status}>
        <div className="blob-inner">
        {innerBlob
}        </div></div>
        );
    }
}