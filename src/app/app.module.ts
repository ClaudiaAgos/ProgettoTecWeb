import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
// @ts-ignore
import { PlayerComponent } from './player/player.component';
import { PlayerInitialComponent } from './player/playerinitial/playerinitial.component';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
// @ts-ignore
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { EditorComponent } from './editor/editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {TeamComponent} from './player/team/team.component';
import {StoryMIComponent} from './player/story/story-MI.component';
import {StoryMCComponent} from './player/story/story-MC.component';
import {StoryMGComponent} from './player/story/story-MG.component';
import { StorysupComponent } from './player/story/storysup/storysup.component';
import { ModstorieComponent } from './editor/modstorie/modstorie.component';
import { ModifdeleComponent } from './editor/modifdele/modifdele.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreastoriaComponent } from './editor/creastoria/creastoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    PlayerInitialComponent,
    EditorComponent,
    TeamComponent,
    StoryMIComponent,
    StoryMCComponent,
    StoryMGComponent,
    StorysupComponent,
    ModstorieComponent,
    ModifdeleComponent,
    CreastoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    AgGridModule.withComponents([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
