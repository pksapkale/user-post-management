import { Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { ProfileComponent } from './profile/profile-main/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: DirectoryComponent,
  },
  {
    path: ':user_id',
    component: ProfileComponent,
  },
];
