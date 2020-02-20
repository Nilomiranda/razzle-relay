/**
 * @flow
 * @relayHash 29911e164b0d383d0e05b28d179db7a2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeQueryVariables = {|
  owner: string
|};
export type HomeQueryResponse = {|
  +user: ?{|
    +login: string,
    +name: ?string,
    +avatarUrl: any,
    +bio: ?string,
    +email: string,
    +following: {|
      +totalCount: number
    |},
    +followers: {|
      +totalCount: number
    |},
  |}
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/


/*
query HomeQuery(
  $owner: String!
) {
  user(login: $owner) {
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
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "owner"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatarUrl",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "bio",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v7 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "totalCount",
    "args": null,
    "storageKey": null
  }
],
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "following",
  "storageKey": null,
  "args": null,
  "concreteType": "FollowingConnection",
  "plural": false,
  "selections": (v7/*: any*/)
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "followers",
  "storageKey": null,
  "args": null,
  "concreteType": "FollowerConnection",
  "plural": false,
  "selections": (v7/*: any*/)
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
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
    "name": "HomeQuery",
    "id": null,
    "text": "query HomeQuery(\n  $owner: String!\n) {\n  user(login: $owner) {\n    login\n    name\n    avatarUrl\n    bio\n    email\n    following {\n      totalCount\n    }\n    followers {\n      totalCount\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '457a76f8fa39c2022bf96745d2c55a50';
module.exports = node;
