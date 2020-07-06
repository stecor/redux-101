import React, { Component } from 'react';
import { connect } from 'react-redux';

class MeatDept extends Component{
  render(){

    const meatInventory = this.props.meatData.map((item,i)=>{
      return(
        <li key={i}>{item.food}: {item.quantity}</li>
      )
    })

    return(
        <div>
          <h1>The meat food department!</h1>
          <ul>
            <h3>{meatInventory}</h3>
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state){
  return({
    meatData: state.meat
  })
}

export default connect(mapStateToProps)(MeatDept)
