import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';

interface myData{
  success: boolean,
  message: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
loggedInStatus = false;

  constructor() { }

  setLoggedIn(value: boolean){
  this.loggedInStatus= value
}
get isLoggedIn(){
  return this.loggedInStatus
}

// getUserDetails(emailid, passwd){
//   emailid="xyz@tcs.com";
//   passwd="abc";
// }

}
