import React from "react";
import cookie from "react-cookie";

export default class PageHeader extends React.Component {
  render() {
    const containerStyle = {display: "flex"};
    const removePadding = {paddingLeft: "0px"};
    var classname = "col-md-12";
    return (
      <div>
        <div className="page-head" style={containerStyle}>
          <div className="page-title">
            <h1>
              <span>
                {this.props.Header}
              </span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}