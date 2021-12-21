import { NgModule } from '@angular/core';

//module
import { BrowserModule } from '@angular/platform-browser';
import { DbzModule } from '../app/dbz/dbz.module';

//page
import { AppComponent } from './app.component';
import {HeroComponent} from './Heroes/hero/hero.component';
import { ListComponent } from './Heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeroComponent]
})
export class AppModule { }
