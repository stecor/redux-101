// this file is an action creator
//  - return action ->object has at least a property of type
//  - this action creator is going to be handed to the dispatch

export default (operation, index) =>{
  console.log(operation, index);
  return  {
    type: 'updateFrozen',
    payload: {
      operation,
      index
    }
  }

}
