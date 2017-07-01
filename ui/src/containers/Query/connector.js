import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


// Initialize GraphQL queries or mutations with the `gql` tag
const mapQueriesToProps = gql`query{
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
export default graphql(mapQueriesToProps)(SubsContainer);
// export default SubsContainer;