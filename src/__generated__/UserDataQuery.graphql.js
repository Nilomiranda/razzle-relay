/**
 * @flow
 * @relayHash a959224704bd9cfbcac0b51eab57bdd0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserDataQueryVariables = {||};
export type UserDataQueryResponse = {|
  +user: ?{|
    +repositories: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +description: ?string,
          +name: string,
          +id: string,
        |}
      |}>
    |}
  |}
|};
export type UserDataQuery = {|
  variables: UserDataQueryVariables,
  response: UserDataQueryResponse,
|};
*/


/*
query UserDataQuery {
  user(login: "Nilomiranda") {
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
    "kind": "Literal",
    "name": "login",
    "value": "Nilomiranda"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            },
            (v1/*: any*/)
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserDataQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": "user(login:\"Nilomiranda\")",
        "args": (v0/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserDataQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": "user(login:\"Nilomiranda\")",
        "args": (v0/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserDataQuery",
    "id": null,
    "text": "query UserDataQuery {\n  user(login: \"Nilomiranda\") {\n    repositories(first: 10) {\n      edges {\n        node {\n          description\n          name\n          id\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '584217174ce7808d83113750508581bb';
module.exports = node;
