import React, { Component } from "react";
import { connect } from "react-redux";

import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  RESET,
  STORE_RESULT,
  DELETE_RESULT
} from "../../redux/actions/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)} />
        <CounterControl label="Subtract 5" clicked={() => this.props.onSubtract(5)} />
        <CounterControl label="Reset" clicked={this.props.onReset} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
        <ul>
          {this.props.storedResults.map((result, index) => {
            return (
              <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>
                {result.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    counter: state.counter.counter,
    storedResults: state.result.results
  };
};

const mapDispatch = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: INCREMENT }),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    onAdd: value => dispatch({ type: ADD, payload: value }),
    onSubtract: value => dispatch({ type: SUBTRACT, payload: value }),
    onReset: () => dispatch({ type: RESET }),
    onStoreResult: result => dispatch({ type: STORE_RESULT, result }),
    onDeleteResult: id => dispatch({ type: DELETE_RESULT, id })
  };
};

export default connect(
  mapState,
  mapDispatch
)(Counter);
