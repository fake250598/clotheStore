import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryviewComponent } from './components/category/categoryview/categoryview.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    CategoryviewComponent,
    ContactUsComponent,
    ShoppingCartComponent,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
