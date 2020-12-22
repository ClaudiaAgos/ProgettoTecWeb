import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
// @ts-ignore
import { AppRoutingModule } from "./app-routing.module";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
// @ts-ignore
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { EditorComponent } from './editor/editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerInitialComponent} from "./player/player-initial/player-initial.component";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {TeamComponent} from "./player/team/team.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditorComponent,
    PlayerInitialComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
