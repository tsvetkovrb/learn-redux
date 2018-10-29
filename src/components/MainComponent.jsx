import React, { Component } from "react";

class MainComponent extends Component {
  render() {
    const {
      firstName,
      secondName,
      changeFirstName,
      changeSecondName
    } = this.props;

    return (
      <div className="app">
        <input
          type="text"
          value={firstName}
          placeholder="Имя"
          onChange={event => {
            changeFirstName(event.target.value);
          }}
        />
        <input
          type="text"
          value={secondName}
          placeholder="Фамилия"
          onChange={event => {
            changeSecondName(event.target.value);
          }}
        />
        <div>{`${firstName} ${secondName}`}</div>
      </div>
    );
  }
}

export default MainComponent;
