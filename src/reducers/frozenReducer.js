const seedData =[
  {
    food: "Tv dinners",
    quantity: 10
  },
  {
    food: "Frozen Veggies",
    quantity: 21
  },
  {
    food: "Frozen Pizza",
    quantity: 25
  },
  {
    food: "Frozen Dinners",
    quantity: 32
  }

]

export default(state = seedData, action)=>{
  console.log("frozen reducer is running");
  console.log(action);

  const newState = [...state];

   if(action.type === 'updateFrozen'){
       if (action.payload.operation === "+"){
         console.log("I care about this action!!!");
         newState[action.payload.index].quantity++
       }else if (action.payload.operation === "-"){
         newState[action.payload.index].quantity--
       }
       return newState;
   }else if(action.type === 'resetInventory'){
       let newState = [...state];
       newState.forEach((item, i) => {
         item.quantity = 0
       });
       return newState;
   }else{
     return state;
   }
}
