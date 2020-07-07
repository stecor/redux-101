import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateProduce from '../actions/produceInvUpdate';
import { bindActionCreators } from 'redux';

class ProduceDept extends Component{

  increment = (operation, index) => {
      //console.log(operation,index);
    this.props.updateProduce(operation, index);
  }

  render(){

      const produceInventory = this.props.produceData.map((item,i)=>{
        return(
          <div key={i}>
            <li >{item.food}: {item.quantity}</li>
            <input  type="button" onClick={()=>{this.increment('+',i)}} value="+"/>
            <input  type="button" onClick={()=>{this.increment('-',i)}} value="-"/>
          </div>
        )
      })

    return(
      <div>
        <h1>The produce food department!</h1>
        <ul>
          <h3>{produceInventory}</h3>
        </ul>

      </div>

    )
  }
}

function mapStateToProps(state){
  return({
    produceData: state.produce
  })
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateProduce: updateProduce
  },dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(ProduceDept)
