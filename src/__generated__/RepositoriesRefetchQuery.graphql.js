/**
 * @flow
 * @relayHash 5f70ad2847e56868623204241a702bcc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Home_user$ref = any;
export type RepositoriesRefetchQueryVariables = {|
  owner: string
|};
export type RepositoriesRefetchQueryResponse = {|
  +$fragmentRefs: Home_user$ref
|};
export type RepositoriesRefetchQuery = {|
  variables: RepositoriesRefetchQueryVariables,
  response: RepositoriesRefetchQueryResponse,
|};
*/


/*
query RepositoriesRefetchQuery(
  $owner: String!
) {
  ...Home_user
}

fragment Home_user on Query {
  user(login: $owner) {
    login
    name
    avatarUrl
    repositories(first: 10) {
      edges {
        node {
          description
          name
          id
        }
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "owner",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RepositoriesRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Home_user",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RepositoriesRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "login",
            "variableName": "owner"
          }
        ],
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "login",
            "args": null,
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "avatarUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repositories",
            "storageKey": "repositories(first:10)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              }
            ],
            "concreteType": "RepositoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Repository",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "description",
                        "args": null,
                        "storageKey": null
                      },
                      (v1/*: any*/),
                      (v2/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RepositoriesRefetchQuery",
    "id": null,
    "text": "query RepositoriesRefetchQuery(\n  $owner: String!\n) {\n  ...Home_user\n}\n\nfragment Home_user on Query {\n  user(login: $owner) {\n    login\n    name\n    avatarUrl\n    repositories(first: 10) {\n      edges {\n        node {\n          description\n          name\n          id\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {
      "derivedFrom": "Home_user",
      "isRefetchableQuery": true
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7c7029d471fe8efdf22ffce2f010a818';
module.exports = node;
