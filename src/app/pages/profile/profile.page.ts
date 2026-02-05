import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonIcon, IonList, IonItem, IonLabel, IonBadge, IonHeader, IonBackButton, IonTitle, IonToolbar, IonButtons
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personOutline, locationOutline, cardOutline,
  notificationsOutline, shieldCheckmarkOutline,
  helpCircleOutline, logOutOutline, chevronForwardOutline, cameraOutline, returnUpBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonContent, IonIcon, IonList, IonItem, IonLabel, IonBadge, IonHeader, IonBackButton, IonTitle, IonToolbar, IonButtons
  ]
})
export class ProfilePage {
  user = {
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    avatar: 'https://i.pravatar.cc/150?u=user',
    orders: 12
  };

  constructor() {
    addIcons({returnUpBackOutline,cameraOutline,personOutline,chevronForwardOutline,locationOutline,cardOutline,notificationsOutline,logOutOutline,shieldCheckmarkOutline,helpCircleOutline});
  }

  onLogout() {
    console.log('Logging out...');
  }
}

