import { Routes } from '@angular/router';
import { CorePromiseComponent } from '../http/core-promise/core-promise.component';
import { CoreObservableComponent } from '../http/core-observable/core-observable.component';
import { JsonpObservableComponent } from '../http/jsonp-observable/jsonp-observable.component';

export const appRoutes: Routes = [
    { path: 'promise', component: CorePromiseComponent },
    { path: 'observable', component: CoreObservableComponent },
    { path: 'jsonp', component: JsonpObservableComponent }
];
