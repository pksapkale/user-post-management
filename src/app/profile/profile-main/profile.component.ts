import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../loader/loader.component';
import { ProfileHelperService } from '../../services/profile-helper.service';
import { DirectorHelperService } from '../../services/director-helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClockCustomComponent } from '../clock-custom/clock-custom.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserPostsComponent } from '../user-posts/user-posts.component';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, LoaderComponent, FormsModule, ClockCustomComponent, UserProfileComponent, UserPostsComponent, FormsModule, NgSelectModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})

export class ProfileComponent implements OnInit {
  _profileHelperService: ProfileHelperService = inject(ProfileHelperService);
  _directoryHelperService: DirectorHelperService = inject(DirectorHelperService);
  _route: ActivatedRoute = inject(ActivatedRoute);
  _router: Router = inject(Router);
  
  isLoading: boolean = false;
  userListWithPost: any;
  currentTimeObj: any = {};
  selectedCountry: any = 'Asia/Kolkata';
  currentUserId: string = '';
  countryList = signal<any>(null);
  currentUserDetails = signal<null | any[]>(null);

  async ngOnInit() {
    try {
      this.isLoading = true;
      this.currentUserId = this._route.snapshot.params['user_id'];
      this.userListWithPost = await this._directoryHelperService.getUserDataWithPost(); // Getting user list with corresponding posts
      this.currentUserDetails.set(this.userListWithPost.filter((e: any) => e.id == this.currentUserId)[0]);
      this.countryList.set(await this._profileHelperService.getCountryList()); // Getting country list
      this.isLoading = false;
    } catch (e) {
      this.isLoading = false;
      console.log('Error in {directory-component}, ERROR ----->>>>> ', e);
    }
  }

  // For getting country current time
  async getCountryCurrentTime() {
    try {
      this.isLoading = true;
      this.currentTimeObj = await this._profileHelperService.getCountryCurrentTime(this.selectedCountry);
      this.isLoading = false;
    }
    catch (e) {
      this.isLoading = false;
      console.log('Error in {directory-component}, ERROR ----->>>>> ', e);
    }
  }

  // For jumping to directory page
  jumpToDirectory() {
    this._router.navigate([''])
  }

}
