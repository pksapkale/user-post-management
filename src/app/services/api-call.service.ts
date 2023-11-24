import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private _http: HttpClient) {}

  // Fetching user list
  fetchUserList() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  // Fetching post list
  fetchPostList() {
    return this._http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // Fetching country list
  fetchCountryList(){
    return this._http.get('https://worldtimeapi.org/api/timezone');
  }
 
  // Fetching country current time
  fetchCountryTimeZone(countryStr: string){
    return this._http.get('https://worldtimeapi.org/api/timezone/' + countryStr);
  }
}
