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

export default(state=seedData, action)=>{
  console.log("meat reducer is running");
  console.log(action);
  return state;
}
