/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type UserCard_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Home_user$ref: FragmentReference;
declare export opaque type Home_user$fragmentType: Home_user$ref;
export type Home_user = {|
  +user: ?{|
    +$fragmentRefs: UserCard_user$ref
  |},
  +$refType: Home_user$ref,
|};
export type Home_user$data = Home_user;
export type Home_user$key = {
  +$data?: Home_user$data,
  +$fragmentRefs: Home_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Home_user",
  "type": "Query",
  "metadata": {
    "refetch": {
      "connection": null,
      "operation": require('./UserRefetchQuery.graphql.js'),
      "fragmentPathInResult": []
    }
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "owner",
      "type": "String!"
    }
  ],
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
          "kind": "FragmentSpread",
          "name": "UserCard_user",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ef2708d8184d70ecf8bf4fce920c2340';
module.exports = node;
