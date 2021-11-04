import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';


// Module PrimeNG
import {PrimengModule} from "./core/primeng/primeng.module";

// Services
import {
  ConfirmationService,
  ContextMenuService,
  FilterService,
  MessageService,
  OverlayService,
  TreeDragDropService
} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";
import {TableService} from "primeng/table";
import {TerminalService} from "primeng/terminal";
import {TreeTableService} from "primeng/treetable";
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { AppTopbarComponent } from './components/app-topbar/app-topbar.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageNotfoundComponent,
    AppTopbarComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
    DialogService,
    FilterService,
    ContextMenuService,
    TableService,
    TerminalService,
    OverlayService,
    TreeDragDropService,
    TreeTableService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
