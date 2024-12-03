import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PostDetailModalComponent } from '../post-detail-modal/post-detail-modal.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    PostDetailModalComponent, 
    CommonModule, 
    RouterModule 
  ]
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  selectedPosts: any[] = [];

  constructor(
    private postService: PostService,
    private modalController: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.loadPosts(); // Load posts from the service
    this.loadSelectedPosts();  // Load selected posts from storage when the component initializes
  }

  // Fetch posts from the PostService
  async loadPosts() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      this.updateCheckboxState();  // Ensure the checkboxes are initialized after loading posts
    });
  }

  // Load the selected posts from storage
  async loadSelectedPosts() {
    const savedSelectedPosts = await this.storage.get('selectedPosts');
    this.selectedPosts = savedSelectedPosts || [];
  }

  // Update the checkbox states for the posts based on the selected posts in storage
  updateCheckboxState() {
    this.posts.forEach(post => {
      post.isSelected = this.selectedPosts.some(selectedPost => selectedPost.id === post.id);
    });
  }

  // Open the post detail modal when clicking on the post (excluding the checkbox)
  async openPostDetail(event: MouseEvent, post: any) {
    const isCheckbox = (event.target as HTMLElement).closest('ion-checkbox');
  
    if (isCheckbox) {
      return;
    }
    const modal = await this.modalController.create({
      component: PostDetailModalComponent,
      componentProps: { post }
    });
    await modal.present();
  }

  // Toggle the selection of a post
  async toggleSelect(post: any) {
    const index = this.selectedPosts.findIndex(item => item.id === post.id);
    if (index > -1) {
      this.selectedPosts.splice(index, 1);  // Remove post if already selected
    } else {
      this.selectedPosts.push(post);  // Add post to selected
    }
    await this.storage.set('selectedPosts', this.selectedPosts);  // Save the updated selection to storage
    this.updateCheckboxState();  // Update checkbox states based on the selected posts
  }

  // Save the selected posts
  async saveSelectedPosts() {
    await this.storage.set('selectedPosts', this.selectedPosts);
    console.log("Selected posts saved.");
  }
  
  // Clear the selected posts
  async clearSelectedPosts() {
    this.selectedPosts = [];
    await this.storage.set('selectedPosts', this.selectedPosts);
  }
}
