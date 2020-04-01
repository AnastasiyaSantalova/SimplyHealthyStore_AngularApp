import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgmaterialModule } from './ngmaterial.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { HighlightCardBorderDirective } from './directives/highlight-card-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HighlightCardBorderDirective,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgmaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
