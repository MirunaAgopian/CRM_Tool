import { Component, inject, afterNextRender } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { MatNativeDateModule } from '@angular/material/core';
import { UserModel } from '../../models/user.class';
import { Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
// import { collection, collectionData } from '@angular/fire/firestore';


import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { RouterLink } from "@angular/router";
import { log } from 'firebase/firestore/pipelines';

@Component({
  selector: 'app-user',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatNativeDateModule,
    MatCardModule,
    RouterLink
],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  user: UserModel = new UserModel();
  dialog = inject(MatDialog);
  allUsers: any[] = [];
  firestore = getFirestore(initializeApp(environment.firebase));

  async ngOnInit() {
    const usersRef = collection(this.firestore, 'users');
    const snapshot = await getDocs(usersRef);

    this.allUsers = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }


  openDialog() {
    this.dialog.open(DialogAddUser);
  }
}
