import React, { Component } from "react";

class MainComponent extends Component {
  render() {
    const {
      firstName,
      secondName,
      thirdName,
      changeFirstName,
      changeSecondName,
      changeThirdName
    } = this.props;

    return (
      <div className="app">
        <input
          type="text"
          value={secondName}
          placeholder="Фамилия"
          onChange={event => {
            changeSecondName(event.target.value);
          }}
        />
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
          value={thirdName}
          placeholder="Имя"
          onChange={event => {
            changeThirdName(event.target.value);
          }}
        />

        <div>{`${firstName} ${secondName} ${thirdName}`}</div>
      </div>
    );
  }
}

export default MainComponent;
