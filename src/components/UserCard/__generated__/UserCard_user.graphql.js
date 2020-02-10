/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserCard_user$ref: FragmentReference;
declare export opaque type UserCard_user$fragmentType: UserCard_user$ref;
export type UserCard_user = {|
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
  +$refType: UserCard_user$ref,
|};
export type UserCard_user$data = UserCard_user;
export type UserCard_user$key = {
  +$data?: UserCard_user$data,
  +$fragmentRefs: UserCard_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "totalCount",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "UserCard_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "followers",
      "storageKey": null,
      "args": null,
      "concreteType": "FollowerConnection",
      "plural": false,
      "selections": (v0/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '49cd99a1ce04f14230c8cf6a6fa41b8b';
module.exports = node;
