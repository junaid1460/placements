// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyBSUDOmIOPw0GqLd_bqBzrDYH4S0jXCdqo',
    authDomain: 'cgproject-631d0.firebaseapp.com',
    databaseURL: 'https://cgproject-631d0.firebaseio.com',
    projectId: 'cgproject-631d0',
    storageBucket: 'cgproject-631d0.appspot.com',
    messagingSenderId: '649844661943'
  },
  collections: {
    companies : 'companies'
  }
};
