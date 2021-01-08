import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// @ts-ignore
import { PlayerComponent } from './player/player.component';
import {HomeComponent} from './home/home.component';
import {EditorComponent} from './editor/editor.component';
import {TeamComponent} from './player/team/team.component';
import {StoryMIComponent} from './player/story/story-MI.component';
import { StoryMCComponent } from './player/story/story-MC.component';
import { StoryMGComponent } from './player/story/story-MG.component';
import {ModstorieComponent} from './editor/modstorie/modstorie.component';
import {CreastoriaComponent} from './editor/creastoria/creastoria.component';


// @ts-ignore
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'player', component: PlayerComponent},
  { path: 'editor', component: EditorComponent},
  { path: 'app-team', component: TeamComponent},
  { path: 'app-modstorie', component: ModstorieComponent},
  { path: 'storyMI', component: StoryMIComponent},
  { path: 'storyMC', component: StoryMCComponent},
  { path: 'storyMG', component: StoryMGComponent},
  { path: 'crea', component: CreastoriaComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule{}
