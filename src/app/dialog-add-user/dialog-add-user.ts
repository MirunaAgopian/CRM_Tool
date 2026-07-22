import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserModel } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  imports: [
    MatAnchor,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss',
})
export class DialogAddUser {
  user: UserModel = new UserModel();
  birthDate: Date = new Date();
  firestore = inject(Firestore);
  loading = false;
  dialogRef = inject(MatDialogRef<DialogAddUser>);

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    const usersCollection = collection(this.firestore, 'users');
    addDoc(usersCollection, { ...this.user })
      .then(() => {
        console.log('User saved to Firestore:', this.user);
      })
      .catch((err) => {
        console.error('Error saving user:', err);
      })
      .finally(()=> {
        this.dialogRef.close();
        this.loading = false;
      });
  }
}
