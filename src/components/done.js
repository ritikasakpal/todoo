import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { connect } from "react-redux";
import Blob from "./Blob";

class Done extends React.Component {
  constructor() {
    super();
    this.titleref = React.createRef();
    this.discref = React.createRef();
  }
  renderAll = () => {
    var Allrender = [];
    Allrender = this.props.all.map(task => {
      if (task.status === "done") {
        return (
          <Blob
            key={task.id}
            no={task.id}
            action={this.renderAll.bind(this)}
            title={task.title}
            disc={task.disc}
            status={task.status}
          />
        );
      }
    });
    return Allrender;
  };

  render() {
    return (
      <div>
        <div className="header">
          <NavLink to="/all" className="tabs ">
            ALL
          </NavLink>
          <div className="tabs selected">DONE</div>
          <NavLink to="/active" className="tabs ">
            ACTIVE
          </NavLink>
        </div>
        {this.renderAll()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    all: state.all
  };
}
export default connect(
  mapStateToProps,
  {}
)(Done);
