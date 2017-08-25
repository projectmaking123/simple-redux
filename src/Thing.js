import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thing extends Component {
  render(){
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={()=> this.props.dispatch({type: "up"})}>Up</button>
        <button onClick={()=> this.props.dispatch({type: "down"})}>Up</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(Thing);
