
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import Routes from '@angular/router';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import {ProductService} from './product.service';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component'


@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Routes
  ],

  appRoutes:Routes[
    {key:ProductService,
    component:ProductListComponent},
    {key:product/:id,
      component:ProductPageComponent
    }
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
