export default `
type Mutation{
  addFood(input: FoodInput):Foods
  editFood(id: ID, input: FoodInput):Foods
  removeFood(id: ID):State
}
`