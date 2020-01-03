import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchService } from './_service/search.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './_routing/route';
import { CorePromiseComponent } from './http/core-promise/core-promise.component';
import { CoreObservableComponent } from './http/core-observable/core-observable.component';
import { JsonpObservableComponent } from './http/jsonp-observable/jsonp-observable.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CorePromiseComponent,
    CoreObservableComponent,
    JsonpObservableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
