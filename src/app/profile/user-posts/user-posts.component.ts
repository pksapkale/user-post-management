import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface POSTS { userId: number, id: number, title: string, body: string }

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})
export class UserPostsComponent {
  @Input() currentUserDetails: any;
  selectedPost: POSTS | null = null;

  postClickHandler(post: POSTS) {
    this.selectedPost = post;
  }

}
