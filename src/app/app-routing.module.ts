import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// @ts-ignore

import {HomeComponent} from "./home/home.component";
import {EditorComponent} from "./editor/editor.component";
import {PlayerInitialComponent} from "./player/player-initial/player-initial.component";
import {TeamComponent} from "./player/team/team.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'team', component: TeamComponent},
  { path: 'editor', component: EditorComponent},
  { path: 'player-initial', component: PlayerInitialComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule{}
