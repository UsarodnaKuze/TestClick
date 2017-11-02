import { ParentFrameComponent } from './parent-frame/parent-frame.component';
import { IframeComponent } from './iframe/iframe.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'iframe', component: IframeComponent },
  { path: 'parentframe', component: ParentFrameComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    IframeComponent,
    ParentFrameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
