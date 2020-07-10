export default function(operation,index)=>{
  return({
    type: 'resetInventory',
    payload:{
      operation,
      index
    }
  })
}
