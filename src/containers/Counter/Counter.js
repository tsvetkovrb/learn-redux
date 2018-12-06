import React, { Component } from "react";
import { connect } from "react-redux";

import {
  increment,
  decrement,
  // add,
  subtract,
  reset,
  storeResult,
  deleteResult,
  fetchDecrement
} from "../../redux/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={() => this.props.onAdd(5)} />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtract(5)}
        />
        <CounterControl label="Reset" clicked={this.props.onReset} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((result, index) => {
            return (
              <li
                key={result.id}
                onClick={() => this.props.onDeleteResult(result.id)}
              >
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
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAdd: value => dispatch(fetchDecrement(value)),
    onSubtract: value => dispatch(subtract(value)),
    onReset: () => dispatch(reset()),
    onStoreResult: result => dispatch(storeResult(result)),
    onDeleteResult: id => dispatch(deleteResult(id))
  };
};

export default connect(
  mapState,
  mapDispatch
)(Counter);
