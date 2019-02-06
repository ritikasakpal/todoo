import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Blob from "./Blob";
import { connect } from "react-redux";
import { getTasks, addTask } from "../js/actions/index";
class All extends React.Component {
  constructor() {
    super();
    this.state = {
      add: false
    };
    this.titleref = React.createRef();
    this.discref = React.createRef();
  }
  Addnewtask() {
    var newtitle = this.titleref.current.value;
    var newdisc = this.discref.current.value;
    this.props.addTask(newtitle, newdisc);
    this.discref.current.value = "";
    this.discref.current.value = "";
    this.setState({ add: false });
  }
  renderAll = () => {
    var Allrender = [];
    Allrender = this.props.all.map(task => {
      console.log(task.status);
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
    });
    return Allrender;
  };

  render() {
    var addInner = <div />;
    if (this.state.add === false) {
      addInner = (
        <div
          className="blob-inner-button"
          onClick={a => {
            this.setState({
              add: true
            });
          }}
        >
          ADD A NEW TODO
        </div>
      );
    } else {
      addInner = (
        <div>
          <input
            type="text"
            ref={this.titleref}
            className="blob-text"
            placeholder="Type Todo title"
          />
          <textarea
            type="text"
            rows="3"
            ref={this.discref}
            className="blob-text area"
            placeholder="Describe your Todo..."
          />
          <div className="blob-bottom">
            <div
              className="one"
              onClick={a => {
                this.setState({
                  add: false
                });
              }}
            >
              {" "}
              CANCEL
            </div>
            <div onClick={() => this.Addnewtask()}>SAVE</div>
          </div>
        </div>
      );
    }
    var editname = "";
    if (this.state.add) editname = "edit";
    return (
      <div>
        <div className="header">
          <div className="tabs selected">ALL</div>
          <NavLink to="/done" className="tabs">
            DONE
          </NavLink>
          <NavLink to="/active" className="tabs">
            ACTIVE
          </NavLink>
        </div>
        {this.renderAll()}
        <div style={{ height: 18 }} className={"blob action " + editname}>
          {addInner}
          <div className="blob-edit" />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.getTasks();
    this.setState({ add: false });
    console.log("a");
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getTasks: () => {
      dispatch(getTasks());
    },
    addTask: (title, disc) => {
      dispatch(addTask(title, disc));
    }
  };
}
function mapStateToProps(state) {
  return {
    all: state.all
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All);
