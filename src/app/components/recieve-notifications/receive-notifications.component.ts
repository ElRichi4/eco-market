import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-receive-notifications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './receive-notifications.component.html',
  styleUrls: ['./receive-notifications.component.css']
})
export class ReceiveNotificationsComponent {
  constructor() {}

  onSubmit(): void {
    console.log('Formulario enviado');
  }
}
