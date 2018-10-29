import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeFirstName, changeSecondName } from "../redux/actions";

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

const mapStateToProps = state => {
  // проводит данные из state к компоненту, который мы оборачиваем
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
