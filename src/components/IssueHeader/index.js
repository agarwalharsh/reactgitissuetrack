import React, { Component } from "react";
import "./index.css";

class IssueHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (
      this.props.issues &&
      this.props.issues.issues &&
      this.props.issues.issues.length
    ) {
      return (
        <div className="header-row-wrapper border-bottom">
          <div className="status-block open-tickets">
            <span className="icon status open" />
            <span className="issue-length">{this.props.issues.issues.length} Open</span>
          </div>
          {/* <div className="status-block closed-tickets">
              <span className="icon status close" />
            </div> */}
        </div>
      );
    } else {
      return "";
    }
  }
}

export default IssueHeader;
