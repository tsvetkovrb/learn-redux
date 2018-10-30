import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MainComponent from "../components/MainComponent";
import {
  changeFirstName,
  changeSecondName,
  changeThirdName
} from "../redux/actions";

const mapStateToProps = state => {
  // проводит данные из state к компоненту, который мы оборачиваем
  return {
    firstName: state.firstName,
    secondName: state.secondName,
    thirdName: state.thirdName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch),
    changeThirdName: bindActionCreators(changeThirdName, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
