import React,  {Component} from 'react';
import { connect } from 'react-redux';
//connection react-redux

class FrozenDept extends Component {
  render(){
    console.log(this.props.frozenData);
    return(
          <h1>The frozen food department!</h1>
    )
  }
}


//mapStateToProps takes 1 arg, "state" and is the rootReducer/Store
//returns a object:



function mapStateToProps(state){
  return {
    frozenData: state.frozen
  }
}

//console.log(connect);
//export default FrozenDept;
// connect takes 2 args -> function that is going to map a piece of redux state
//to this component props
export default connect(mapStateToProps)(FrozenDept);
