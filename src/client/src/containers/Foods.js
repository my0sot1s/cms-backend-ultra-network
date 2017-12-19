import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
// It could be a simple React class:
class FoodsContainer extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
// Initialize GraphQL queries or mutations with the `gql` tag
const FoodsQuery = gql`query{
  Foods {
    link
    title
    price
    fomular
  }
}
`;

const FOODS_SUBSCRIPTION = gql`subscription {
  onSaveFood {
    link
    title
    price
    fomular
  }
}
`

// We then can use `graphql` to pass the query results returned by MyQuery
// to MyComponent as a prop (and update them as the results change)
export default graphql(FoodsQuery, {
  props: props => {
    return {
      subscribeToNewFood: params => {
        return props.comments.subscribeToMore({
          document: FOODS_SUBSCRIPTION,
          updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) {
              debugger
              return prev;
            }
            const newFeedItem = subscriptionData.data.onSaveFood;
            return Object.assign({}, prev, {
              entry: {
                comments: [newFeedItem, ...prev.entry.comments]
              }
            });
          }
        });
      }
    };
  },
}

)(FoodsContainer);
// export default FoodsContainer;