import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewsComponent } from './components/news/news.component';
import { ReceiveNotificationsComponent } from './components/receive-notifications/receive-notifications.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

export const routes: Routes = [
  { path: 'vender', component: ProductListComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'recibir-avisos', component: ReceiveNotificationsComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'sobre-nosotros', component: AboutUsComponent },
  { path: 'perfil', component: UserProfileComponent },
  { path: '', redirectTo: '/vender', pathMatch: 'full' },
];
