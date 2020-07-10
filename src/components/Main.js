import React, { Component } from 'react';
import { connect } from 'react-redux';
import resetInventory from '../actions/resetInventory';
import { bindActionCreators } from 'redux';

class Main extends Component{

    render(){

      const frozenQuantity = this.props.frozenData.reduce((accum,frozenItem)=>accum+frozenItem.quantity,0)
      const meatQuantity = this.props.meatData.reduce((accum,meatItem)=>accum+meatItem.quantity,0)
      const produceQuantity = this.props.produceData.reduce((accum,produceItem)=>accum+produceItem.quantity,0)
      return(
        <div>
            <h2>FrozenDept: {frozenQuantity}</h2>
            <h2>MeatDept: {meatQuantity}</h2>
            <h2>ProduceDept: {produceQuantity}</h2>
            <button onClick={this.props.resetInventory}>Reset Inventory</button>
        </div>
      )
    }
}

function mapStateToProps(state){

  return({
    frozenData: state.frozen,
    meatData: state.meat,
    produceData: state.produce,
  })
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
      resetInventory:resetInventory
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
