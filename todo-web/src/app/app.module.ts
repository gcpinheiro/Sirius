import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LeftBarComponent } from './shareds/left-bar/left-bar.component';
import { CardComponent } from './shareds/card/card.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { TodoComponent } from './pages/home/components/todo/todo.component';
import { CompletedComponent } from './pages/home/components/completed/completed.component';
import { HeaderComponent } from './shareds/header/header.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OptionComponent } from './shareds/left-bar/components/option/option.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalAddComponent } from './shareds/modals/modal-add/modal-add.component';
import { FormsModule } from '@angular/forms';
import { ModalDeleteComponent } from './shareds/modals/modal-delete/modal-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftBarComponent,
    CardComponent,
    WelcomeComponent,
    TodoComponent,
    CompletedComponent,
    HeaderComponent,
    OptionComponent,
    ModalAddComponent,
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
