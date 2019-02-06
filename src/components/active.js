import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Blob from "./Blob";
import { connect } from "react-redux";
class Active extends React.Component {
  constructor() {
    super();
    this.state = {
      alll: []
    };
    this.titleref = React.createRef();
    this.discref = React.createRef();
  }
  renderAll = () => {
    var Allrender = [];

    Allrender = this.props.all.map(task => {
      console.log(task.status);
      if (task.status !== "done") {
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
          <NavLink to="/done" className="tabs">
            DONE
          </NavLink>
          <div className="tabs selected">ACTIVE</div>
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
)(Active);
