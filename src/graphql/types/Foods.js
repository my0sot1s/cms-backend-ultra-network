import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

export const FoodsType = new GraphQLObjectType({
  name: 'Foods',
  description: 'Foods Type',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    link: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLInt
    },
    fomular: {
      type: GraphQLString
    }
  }
})
export const FoodsInputType = new GraphQLInputObjectType({
  name: 'FoodsInput',
  description: 'Create New Food',
  fields: {
    link: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLInt
    },
    fomular: {
      type: GraphQLString
    }
  }
})