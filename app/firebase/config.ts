// tslint:disable-next-line:no-var-requires
const fb = require('../../private/firebaseconfig.json');

// Initialize Firebase
const config = {
  apiKey: fb.apiKey,
  authDomain: fb.authDomain,
  databaseURL: fb.databaseURL,
  messagingSenderId: fb.messagingSenderId,
  projectId: fb.projectId,
  storageBucket: fb.storageBucket
};

export default config;
