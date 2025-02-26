import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  onSubmit() {
    console.log('Formulario enviado', this.name, this.email, this.message);
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  }
}
