import React from "react";

export default class ErrorButton extends React.Component {
  state = {
    error: false,
    info: "Random Text",
  };

  render() {
    if (this.state.error) {
      this.setState({
        info: undefined,
      });
    }

    return (
      <React.Fragment>
        <button onClick={() => this.setState({ error: true })}>
          Dead Project
        </button>
        <p>{this.state.info}</p>
      </React.Fragment>
    );
  }
}
