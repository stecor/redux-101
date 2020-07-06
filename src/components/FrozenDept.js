import React,  {Component} from 'react';
import { connect } from 'react-redux';
import updateFrozen from '../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';
//connection react-redux

class FrozenDept extends Component {

  increment = (operation, index) => {
      //console.log(operation,index);
    this.props.updateFrozen(operation, index);
  }

  render(){

    const frozenInventory = this.props.frozenData.map((item,i)=>{
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
        <h1>The frozen food department!</h1>
        <ul>
          <h3>{frozenInventory}</h3>
        </ul>

      </div>

    )
  }
}


//mapStateToProps takes 1 arg, "state" and is the rootReducer/Store
//returns a object:

function mapStateToProps(state){
  return ({
    frozenData: state.frozen
  })
}

// mapDispatchToProps -> tie our component to mapDispatchToProps
// it returns ->
// it takes 1 arg: bindActionCreators an object: local prop, value will be func
//2nd arg: is dispatch
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateFrozen: updateFrozen
  },dispatch)
}

//console.log(connect);
//export default FrozenDept;
// connect takes 2 args -> function that is going to map a piece of redux state
//to this component props
export default connect(mapStateToProps,mapDispatchToProps)(FrozenDept);
