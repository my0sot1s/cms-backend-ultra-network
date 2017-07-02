export default `
type Foods{
  _id:String!
  link: String!
  title:String!
  price:Int
  fomular:String
}
input FoodInput{
  link:String!
  title:String!
  price:Int
  fomular:String
}
type Query{
  getFood(id:ID):Foods
  getFoods:[Foods]
}
`
// type Mutation{
//   addFood(input: FoodInput):Foods
// }