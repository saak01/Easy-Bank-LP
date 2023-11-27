import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeRootComponent } from './pages/home/components/home-root/home-root.component';
import { HeaderComponent } from './pages/home/components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './pages/home/components/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { ApresentationComponent } from './pages/home/components/apresentation/apresentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRootComponent,
    HeaderComponent,
    FooterComponent,
    ApresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
