/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Home_user$ref: FragmentReference;
declare export opaque type Home_user$fragmentType: Home_user$ref;
export type Home_user = {|
  +user: ?{|
    +login: string,
    +name: ?string,
    +avatarUrl: any,
    +repositories: {|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +description: ?string,
          +name: string,
        |}
      |}>
    |},
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


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Home_user",
  "type": "Query",
  "metadata": {
    "refetch": {
      "connection": null,
      "operation": require('./RepositoriesRefetchQuery.graphql.js'),
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
          "kind": "ScalarField",
          "alias": null,
          "name": "login",
          "args": null,
          "storageKey": null
        },
        (v0/*: any*/),
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
                    (v0/*: any*/)
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '7c7029d471fe8efdf22ffce2f010a818';
module.exports = node;
