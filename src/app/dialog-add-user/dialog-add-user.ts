import { Component } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { MatDialogClose } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-add-user',
  imports: [MatAnchor, MatDialogClose],
  templateUrl: './dialog-add-user.html',
  styleUrl: './dialog-add-user.scss',
})
export class DialogAddUser {}
