import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MainComponent from "../components/MainComponent";
import {
  changeFirstName,
  changeSecondName,
  changeThirdName,
  changeAge
} from "../redux/actions";

const mapStateToProps = state => {
  // проводит данные из state к компоненту, который мы оборачиваем
  return {
    firstName: state.firstName,
    secondName: state.secondName,
    thirdName: state.thirdName,
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch),
    changeThirdName: bindActionCreators(changeThirdName, dispatch),
    changeAge: bindActionCreators(changeAge, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
