import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';
// It could be a simple React class:
class SubsContainer extends Component {
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
// We then can use `graphql` to pass the query results returned by MyQuery
// to MyComponent as a prop (and update them as the results change)
export default graphql(FoodsQuery)(SubsContainer);
// export default SubsContainer;