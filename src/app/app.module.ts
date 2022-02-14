import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {MyPerfModule} from '@gpeel/my-perf-tools';
import {PlogModule} from '@gpeel/plog';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {StaticWeatherComponent} from './static/static-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, StaticWeatherComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    //
    PlogModule.forRoot(environment),
    MyPerfModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

