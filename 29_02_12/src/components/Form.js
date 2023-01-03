import React from "react";

const DEFAULT_NAME = "Anonymous";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { userInput: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState(() => ({
      userInput: e.target[0].value,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <p>There are first project of {this.state.userInput || DEFAULT_NAME}</p>
        <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Your name"></input>
          <button type="submit">Save</button>
        </form>
        </div>
      </React.Fragment>
    );
  }
}
