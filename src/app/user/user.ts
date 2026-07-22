import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { MatNativeDateModule } from '@angular/material/core';
import { UserModel } from '../../models/user.class';
import { Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  user: UserModel = new UserModel();
  dialog = inject(MatDialog);
  firestore: Firestore = inject(Firestore);

  openDialog() {
    this.dialog.open(DialogAddUser);
  }
}
