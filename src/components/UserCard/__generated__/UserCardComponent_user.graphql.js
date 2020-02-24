/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserCardComponent_user$ref: FragmentReference;
declare export opaque type UserCardComponent_user$fragmentType: UserCardComponent_user$ref;
export type UserCardComponent_user = {|
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
  +$refType: UserCardComponent_user$ref,
|};
export type UserCardComponent_user$data = UserCardComponent_user;
export type UserCardComponent_user$key = {
  +$data?: UserCardComponent_user$data,
  +$fragmentRefs: UserCardComponent_user$ref,
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
  "name": "UserCardComponent_user",
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
(node/*: any*/).hash = '9c5de53b491404247fbdea867b63b9ac';
module.exports = node;
