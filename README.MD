# Setup project

## Installation

Git and Install package from npm

```sh
git clone https://github.com/my0sot1s/sidra.git
npm install
```


# Example with [Graphiql](http:localhost:3001/graphiql)



#### Query Example : with Query

```js
query {
  Foods(page:1,limit:20) {
    link
    title
    price
    fomular
  }
}
```

#### Mution Example : with Musion
```js
mutation{
 saveFoods(
  data:{
    link:"http://fb.com",
    title:"facebook",
    price:1000000,
    fomular:"Mark"
  }
 ) {
   link
   title
   price
   fomular
 }
}
```

#### Subscription Example : with insert Mution

```js
subscription{
  onSaveFood {
    link
    title
    price
    fomular
  }
}
```




