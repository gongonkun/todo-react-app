import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

class AddTodo extends Component {

  render() {
    return (
      <div>
        <input type='text' ref='taskNameText'/>
        <button onClick={this.props.addTask}>Add Task</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: () => { dispatch(addTask(this.refs.inputText.getDOMNode().value)) }
  }
}
export default connect(null, mapDispatchToProps)(AddTodo);
