"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = "\ntype Foods{\n  _id:String!\n  link: String!\n  title:String!\n  price:Int\n  fomular:String\n}\ninput FoodInput{\n  link:String!\n  title:String!\n  price:Int\n  fomular:String\n}\ntype Query{\n  getFood(id:ID):Foods\n  getFoods:[Foods]\n}\n";


















// type Mutation{
//   addFood(input: FoodInput):Foods
// }