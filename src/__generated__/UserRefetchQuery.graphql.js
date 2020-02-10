/**
 * @flow
 * @relayHash 7ff9f0139dc68b0abc70db14211c870b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Home_user$ref = any;
export type UserRefetchQueryVariables = {|
  owner: string
|};
export type UserRefetchQueryResponse = {|
  +$fragmentRefs: Home_user$ref
|};
export type UserRefetchQuery = {|
  variables: UserRefetchQueryVariables,
  response: UserRefetchQueryResponse,
|};
*/


/*
query UserRefetchQuery(
  $owner: String!
) {
  ...Home_user
}

fragment Home_user on Query {
  user(login: $owner) {
    ...UserCard_user
    id
  }
}

fragment UserCard_user on User {
  login
  name
  avatarUrl
  bio
  email
  following {
    totalCount
  }
  followers {
    totalCount
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
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "totalCount",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserRefetchQuery",
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
    "name": "UserRefetchQuery",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "avatarUrl",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "bio",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "following",
            "storageKey": null,
            "args": null,
            "concreteType": "FollowingConnection",
            "plural": false,
            "selections": (v1/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "followers",
            "storageKey": null,
            "args": null,
            "concreteType": "FollowerConnection",
            "plural": false,
            "selections": (v1/*: any*/)
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserRefetchQuery",
    "id": null,
    "text": "query UserRefetchQuery(\n  $owner: String!\n) {\n  ...Home_user\n}\n\nfragment Home_user on Query {\n  user(login: $owner) {\n    ...UserCard_user\n    id\n  }\n}\n\nfragment UserCard_user on User {\n  login\n  name\n  avatarUrl\n  bio\n  email\n  following {\n    totalCount\n  }\n  followers {\n    totalCount\n  }\n}\n",
    "metadata": {
      "derivedFrom": "Home_user",
      "isRefetchableQuery": true
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ef2708d8184d70ecf8bf4fce920c2340';
module.exports = node;
