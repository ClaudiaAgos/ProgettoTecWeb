import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { EditorService} from './editor.service';
import { CreastoriaComponent} from './creastoria/creastoria.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})


export class EditorComponent{

  constructor(private router: Router){}
  // tslint:disable-next-line:typedef
  crea(){
    this.router.navigateByUrl('/crea');
  }
  // tslint:disable-next-line:typedef
  raccolta(){
  this.router.navigateByUrl('/app-modstorie'); }
}
