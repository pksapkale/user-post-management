import { Injectable, inject } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root',
})
export class DirectorHelperService {
  _apiCallService: ApiCallService = inject(ApiCallService);

  /*

    Method Name - getUserList
    Desc - For getting user list
    params - {} 

  */

  getUserList() {
    return new Promise((res, rej) => {
      this._apiCallService.fetchUserList().subscribe({
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

    Method Name - getPostList
    Desc - For getting post list
    params - {} 

  */

  getPostList() {
    return new Promise((res, rej) => {
      this._apiCallService.fetchPostList().subscribe({
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

    Method Name - mergeUserListWithPosts
    Desc - For merging posts with respected user
    params - {} 

  */

  mergeUserListWithPosts(userList: any, postsList: any) {
    let mergedArray = userList.map((user: any) => {
      user['posts'] = postsList.filter((post: any) => post.userId === user.id);
      return user;
    });
    return mergedArray;
  }

  /*

    Method Name - getUserDataWithPost
    Desc - For getting user with respected post merged data
    params - {} 

  */

  async getUserDataWithPost() {
    let userList = await this.getUserList();
    let postList = await this.getPostList();
    return this.mergeUserListWithPosts(userList, postList);
  }
}
