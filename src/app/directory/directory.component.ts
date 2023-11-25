import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorHelperService } from '../services/director-helper.service';
import { LoaderComponent } from '../loader/loader.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './directory.component.html',
  styleUrl: './directory.component.css',
})
export class DirectoryComponent implements OnInit {
  _directoryHelperService: DirectorHelperService = inject(DirectorHelperService);
  _router: Router = inject(Router);
  userListWithPost = signal<null | any[]>(null);
  isLoading = signal<boolean>(false);

  async ngOnInit() {
    try {
      this.isLoading.set(true);
      this.userListWithPost.set(await this._directoryHelperService.getUserDataWithPost()); // Getting user list with corresponding posts
      this.isLoading.set(false);
    }
    catch (e) {
      console.log('Error in {directory-component}, ERROR ----->>>>> ', e);
    }
  }

  // For jumping to profile section
  jumpToRoute(route: string) {
    this._router.navigateByUrl("/" + route);
  }

}
