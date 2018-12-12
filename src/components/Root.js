import React from "react";
import {NavLink} from "react-router-dom"
export class Root extends React.Component{
render(){
    return(
        <div style={{height:'100vh',width:'100vw',backgroundColor:"lightsalmon"}} >
        <NavLink style={
            {position:"absolute",top:"calc(50% - 26px)",left:"calc(50% - 67px)",textDecoration:"none",color:"#4f4f4f",width:'fit-content',padding:"17px 24px",cursor:"pointer",backgroundColor:'lightgrey',borderRadius:'6px',textTransform:"uppercase",fontWeight:"bold",boxShadow:'0px 3px 6px 0px #888888'
        }
        } to="/all">Start App</NavLink>
        </div>
    )
}
}