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
import { BenefitsComponent } from './pages/home/components/benefits/benefits.component';
import { CardBenefitsComponent } from './shared/cards/components/card-benefits/card-benefits.component';
import { ArticlesComponent } from './pages/home/components/articles/articles.component';
import { CardArticleComponent } from './shared/cards/components/card-article/card-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRootComponent,
    HeaderComponent,
    FooterComponent,
    ApresentationComponent,
    BenefitsComponent,
    CardBenefitsComponent,
    ArticlesComponent,
    CardArticleComponent
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
