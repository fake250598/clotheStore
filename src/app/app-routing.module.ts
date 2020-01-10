import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryviewComponent } from './components/category/categoryview/categoryview.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'category', component: CategoryComponent, children: [
    {path: 'view', component: CategoryviewComponent, pathMatch: 'full'},
  ]},
  {path: 'item-detail', component: ItemDetailComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
