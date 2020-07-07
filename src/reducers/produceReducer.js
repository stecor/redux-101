const seedData =[
  {
    food: "apple",
    quantity: 10
  },
  {
    food: "lettuce",
    quantity: 21
  },
  {
    food: "onion",
    quantity: 25
  },
  {
    food: "turnips",
    quantity: 32
  }
]

export default(state = seedData, action)=>{
  console.log("Produce reducer is running");
  console.log(action);

  const newState = [...state];

   if(action.type === 'updateProduce'){
       if (action.payload.operation === "+"){
         console.log("I care about this action!!!");
         newState[action.payload.index].quantity++
       }else if (action.payload.operation === "-"){
         newState[action.payload.index].quantity--
       }
       return newState;
   }else{
     return state;
   }
}
