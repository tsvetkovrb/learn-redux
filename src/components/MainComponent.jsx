import React, { Component } from "react";

class MainComponent extends Component {
  render() {
    const {
      firstName,
      secondName,
      thirdName,
      age,
      changeFirstName,
      changeSecondName,
      changeThirdName,
      changeAge
    } = this.props;

    // let myAge = "год";

    // if (age <= 4 && age !== 0) {
    //   myAge = "года";
    // }

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
          placeholder="Отчество"
          onChange={event => {
            changeThirdName(event.target.value);
          }}
        />
        <input
          type="text"
          value={age}
          placeholder="Возраст"
          onChange={event => {
            changeAge(event.target.value);
          }}
        />

        <div>
          ФИО:
          <br /> {`${secondName} ${firstName} ${thirdName}`}
          <br />
          <br />
          Возраст: {`${+age}`}
          <br />
        </div>
      </div>
    );
  }
}

export default MainComponent;
