import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProduceDept extends Component{

  render(){

      const produceInventory = this.props.produceData.map((item,i)=>{
        return(
          <li key={i}>{item.food}: {item.quantity}</li>
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


export default connect(mapStateToProps)(ProduceDept)
