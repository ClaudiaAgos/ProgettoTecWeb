import { Component} from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {MatDialogModule} from '@angular/material/dialog';
import { ModifdeleComponent} from '../modifdele/modifdele.component';
import { MatDialog } from '@angular/material/dialog';
import {ModstorieService} from './modstorie.service';
import {EditorService} from '../editor.service';
import {CreastoriaComponent} from '../creastoria/creastoria.component';
import {Router} from '@angular/router';

// tslint:disable-next-line:class-name


@Component({
  selector: 'app-modstorie',
  templateUrl: './modstorie.component.html',
  styleUrls: ['./modstorie.component.css']
})
export class ModstorieComponent {
    constructor( private modstService: ModstorieService, private edserv: EditorService, private router: Router) {
   }
  columnDefs = [
    {field: 'n', sortable: true, filter: true},
    {field: 'title', sortable: true, filter: true},
    {field: 'nstories', sortable: true, filter: true},
    {field: 'actions', resizable: true}
    ];

  rowData = [
    { n: '1', title: 'storia 7-10 ', nstories: '10', cellRenderer : function (params) },
    { n: '2', title: 'storia 11-14 ', nstories: '10', cellRenderer : function (params)},
    { n: '3', title: 'storia 15-18 ', nstories: '10', cellRenderer : function (params)},

  ];
  // tslint:disable-next-line:typedef
  create(){
    this.router.navigateByUrl('/crea');
  }

}

