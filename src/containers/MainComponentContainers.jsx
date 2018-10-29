import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MainComponent from "../components/MainComponent";
import { changeFirstName, changeSecondName } from "../redux/actions";

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
