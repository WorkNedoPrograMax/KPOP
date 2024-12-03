import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-post-detail-modal',
  templateUrl: './post-detail-modal.component.html',
  styleUrls: ['./post-detail-modal.component.scss'],
  standalone: true,
  imports: [IonicModule]  // Add this line
})
export class PostDetailModalComponent {
  @Input() post: any;

  constructor(private modalController: ModalController) { }

  close() {
    this.modalController.dismiss();
  }
}
