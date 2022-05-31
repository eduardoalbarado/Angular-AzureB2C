// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  B2C_clientId: "${B2C_CLIENTID}",//'Enter_Your_ClientId',
  B2C_signUpSignIn: "${B2C_SIGNUPSIGNIN}",//'https://Enter_Your_Domain.b2clogin.com/Enter_Your_Domain.onmicrosoft.com/Enter_Your_Policy_sign-up',
  B2C_editProfile: "${B2C_EDITPROFILE}",//"https://Enter_Your_Domain.b2clogin.com/Enter_Your_Domain.onmicrosoft.com/Enter_Your_Policy_edit_profile",
  B2C_authorityDomain: "${B2C_AUTHORITYDOMAIN}",//'/Enter_Your_Domain.b2clogin.com',
  API_url: "${API_URL}",//'https://localhost:44351/api/todolist',
  API_scopes: "${API_SCOPES}",//'https:///Enter_Your_Domain.onmicrosoft.com/Enter_Your_App/ScopeName',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
