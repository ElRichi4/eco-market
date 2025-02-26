import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  events = [
    {
      title: 'Taller de Agricultura Urbana',
      date: new Date('2025-03-14'),
      description: 'Aprende a cultivar tus propios alimentos en espacios reducidos.',
    },
    {
      title: 'Charla sobre Cambio Climático',
      date: new Date('2025-03-20'),
      description: 'Descubre cómo puedes contribuir a combatir el cambio climático.',
    },
    {
      title: 'Workshop de Reciclaje Creativo',
      date: new Date('2025-04-04'),
      description: 'Convierte residuos en objetos útiles y decorativos.',
    },
    {
      title: 'Seminario de Energías Renovables',
      date: new Date('2025-04-09'),
      description: 'Explora las alternativas energéticas sostenibles para el futuro.',
    },
    {
      title: 'Curso de Cocina Vegana',
      date: new Date('2025-04-20'),
      description: 'Descubre recetas saludables y deliciosas sin ingredientes de origen animal.',
    },
    {
      title: 'Jornada de Limpieza de Playas',
      date: new Date('2025-05-14'),
      description: 'Únete a nosotros para cuidar el litoral y preservar la vida marina.',
    },
    {
      title: 'Foro sobre Movilidad Sostenible',
      date: new Date('2025-05-28'),
      description: 'Debate sobre opciones de transporte ecológicas y eficientes.',
    },
    {
      title: 'Charla: Zero Waste en el Hogar',
      date: new Date('2025-06-10'),
      description: 'Aprende a reducir tus residuos diarios con consejos prácticos.',
    },
    {
      title: 'Exposición de Arte Reciclado',
      date: new Date('2025-06-25'),
      description: 'Admira obras de arte creadas a partir de materiales reciclados.',
    },
    {
      title: 'Ruta Senderista por Parajes Naturales',
      date: new Date('2025-07-05'),
      description: 'Disfruta de una caminata en conexión con la naturaleza.',
    },
    {
      title: 'Taller de Huertos Verticales',
      date: new Date('2025-08-18'),
      description: 'Descubre cómo cultivar en espacios pequeños aprovechando la verticalidad.',
    },
  ];
}