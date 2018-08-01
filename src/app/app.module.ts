import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NewsComponent } from './components/news/news.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PartsComponent } from './components/parts/parts.component';
import { WorksComponent } from './components/works/works.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FormsModule } from '@angular/forms';

import { UserdataService } from './providers/userdata.service';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { AdminComponent } from './components/admin/admin.component';
import { PartsService } from './services/parts/parts.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewsComponent,
    CustomerComponent,
    PartsComponent,
    WorksComponent,
    AboutComponent,
    ServicesComponent,
    MaintenanceComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'News',component: NewsComponent},
      {path:'about',component: AboutComponent},
      {path:'services',component: ServicesComponent},
      {path: 'maintenance', component: MaintenanceComponent},
      {path: 'admin', component: AdminComponent}
    ])
  ],
  providers: [UserdataService,PartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
