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
  return state;
}
