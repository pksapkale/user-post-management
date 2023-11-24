import { Injectable, inject } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileHelperService {
  _apiCallService: ApiCallService = inject(ApiCallService);

  /*

    Method Name - getCountryList
    Desc - For getting country list
    params - {} 

  */

  getCountryList() {
    return new Promise((res, rej) => {
      this._apiCallService.fetchCountryList().subscribe({
        next: (data) => {
          res(data);
        },
        error: (err) => {
          rej(err);
        },
      });
    });
  }

  /*

    Method Name - getCountryCurrentTime
    Desc - For getting country current from country string
    params - {
      countryStr: String
    } 

  */

  getCountryCurrentTime(countryStr: string) {
    return new Promise((res, rej) => {
      this._apiCallService.fetchCountryTimeZone(countryStr).subscribe({
        next: (data) => {
          res(data);
        },
        error: (err) => {
          rej(err);
        },
      });
    });
  }


}
