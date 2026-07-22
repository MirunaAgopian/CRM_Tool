import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogAddUser } from '../dialog-add-user/dialog-add-user';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-user',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatNativeDateModule,
  ],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogAddUser);
  }
}
