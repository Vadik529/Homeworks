import React from "react";
import "./Styles.css"

export class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <a href={this.props.link}>Lorem</a>
          </li>
          <li>
            <a href={this.props.link}>Ipsum</a>
          </li>
          <li>
            <a href={this.props.link}>Dolor</a>
          </li>
          <li>
            <a href={this.props.link}>Sit</a>
          </li>
        </ul>
      </div>
    );
  }
}
