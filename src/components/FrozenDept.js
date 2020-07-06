import React,  {Component} from 'react';
import { connect } from 'react-redux';
//connection react-redux

class FrozenDept extends Component {

  render(){

    const frozenInventory = this.props.frozenData.map((item,i)=>{
      return(
        <li key={i}>{item.food}: {item.quantity}</li>
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

//console.log(connect);
//export default FrozenDept;
// connect takes 2 args -> function that is going to map a piece of redux state
//to this component props
export default connect(mapStateToProps)(FrozenDept);
