import React from "react";
import "./blob.css";
export class Addblob extends React.Component{

    render(){
        return(
            <div >
            <input type="text"  className="blob-text" placeholder="Type Todo title" value={this.props.title}></input>
            <textarea type="text" rows="3" className="blob-text area" value={this.props.disc} placeholder="Describe your Todo..."></textarea>
            <div className="blob-bottom">
            <div className="one"> CANCEL</div>
            <div>SAVE</div>
            </div>
                  </div>
        )
    }
}