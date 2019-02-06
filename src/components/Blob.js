import React from "react";
import "./blob.css";

import { connect } from "react-redux";
import { markasDone, Savetask } from "../js/actions/index";
class Blob extends React.Component {
  constructor() {
    super();
    this.state = {
      edit: false
    };
    this.titleref = React.createRef();
    this.discref = React.createRef();
  }
  Marktaskdone() {
    let id = this.props.no;
    this.props.markasDone(id);
  }
  Savetask() {
    var newtitle = this.titleref.current.value;
    var newdisc = this.discref.current.value;
    let id = this.props.no;
    var data = { no: id, newtitle, newdisc };
    this.props.Savetask(data);
    this.setState({ edit: false });
  }
  render() {
    var innerBlob;
    if (this.state.edit === true) {
      innerBlob = (
        <div>
          <input
            type="text"
            ref={this.titleref}
            className="blob-text"
            placeholder="Type Todo title"
            defaultValue={this.props.title}
          />
          <textarea
            type="text"
            rows="3"
            ref={this.discref}
            className="blob-text area"
            defaultValue={this.props.disc}
            placeholder="Describe your Todo..."
          />
          <div className="blob-bottom">
            <div
              className="one"
              onClick={A => {
                this.setState({
                  edit: false
                });
              }}
            >
              {" "}
              CANCEL
            </div>
            <div onClick={() => this.Savetask()}>SAVE</div>
          </div>
        </div>
      );
    } else {
      var actions = <div />;
      if (this.props.status === "active") {
        actions = (
          <div>
            <div
              style={{
                border: "1px solid #4f4f4f",
                borderRadius: "4px",
                marginLeft: "8px"
              }}
              className="blob-action"
              onClick={() => this.Marktaskdone()}
            >
              Mark As done
            </div>
            <div
              className="blob-action"
              onClick={A => {
                this.setState({
                  edit: true
                });
              }}
            >
              edit
            </div>
          </div>
        );
      }

      innerBlob = (
        <div>
          <div className="blob-head">
            <div className="blob-title"> {this.props.title} </div>
            {actions}
          </div>

          <div className="blob-disc">{this.props.disc}</div>
          <div className="blob-status">
            {" "}
            STATUS : {this.props.status.toUpperCase()}
          </div>
        </div>
      );
    }
    var editname = "";
    if (this.state.edit) {
      editname = "edit";
    }
    return (
      <div
        style={{ height: 72 }}
        className={"blob " + this.props.status + " " + editname}
      >
        <div className="blob-inner">{innerBlob} </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    markasDone: no => {
      dispatch(markasDone(no));
    },
    Savetask: data => {
      dispatch(Savetask(data));
    }
  };
}
export default connect(
  null,
  mapDispatchToProps
)(Blob);
