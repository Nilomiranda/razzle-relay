# Razzle example using Relay

This demonstrates an example of using Relay to work with GraphQL APIs and
SSR using Razzle.

## Installation

Clone this repo and run:

```
yarn
```

or:

```
npm install
```

You'll also need to provide your own github personal access token to use this app

Follow the instructions [here](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
 to get yours.
 
 With your token in hands, create a new file at `src/config` called `RelayEnvironment.js`
 and copy the content from `RelayEnvironment_Template.js` to it.
 
 Place your token as the value of `GITHUB_PERSONAL_ACCESS_TOKEN` and you'll be good to go.


After that:

`yarn start` or `npm start`

You'll see that the console says that app is running in `localhost:3001`
but this is a know issue and the correct port from which the app is running
is `3000`.

