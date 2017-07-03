export default `
type Query{
  getFood(id:ID):Foods
  getFoods:[Foods]
}
`