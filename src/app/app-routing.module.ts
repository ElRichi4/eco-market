import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: 'vender', component: ProductListComponent },
  { path: 'noticias', component: NewsComponent },
  { path: '', redirectTo: '/vender', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
