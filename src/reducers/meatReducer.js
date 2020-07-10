const seedData =[
  {
    food: "chicken breast",
    quantity: 14
  },
  {
    food: "bacon",
    quantity: 11
  },
  {
    food: "sausage",
    quantity: 15
  },
  {
    food: "peperoni",
    quantity: 12
  }
]

export default(state = seedData, action)=>{
  console.log("Meat reducer is running");
  console.log(action);

const newState = [...state];

 if(action.type === 'updateMeat'){
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
