// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCbMH3vblC2Icdq7rkIvmuuRcBpVS8BDhE",
    authDomain: "gassapp-8b8db.firebaseapp.com",
    projectId: "gassapp-8b8db",
    storageBucket: "gassapp-8b8db.appspot.com",
    messagingSenderId: "700495017972",
    appId: "1:700495017972:web:6c3445a9e2e2c01241eba1",
    measurementId: "${config.measurementId}"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
