import { graphql } from 'react-relay';

const query = graphql`
    query UserQuery ($login: String!) {
        user (login: $login) {
            repositories (first: 10) {
                edges {
                    node {
                        description
                        name
                        id
                    }
                }
            }
        }
    }
`

export default query;