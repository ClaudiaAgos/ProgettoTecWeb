import { Injectable } from '@angular/core';
import { GridOptions, RowNode } from 'ag-grid-community';
import { EditorService, storia } from '../editor.service';
import {EditorComponent} from '../editor.component';
import { ModstorieComponent} from './modstorie.component';

@Injectable({
  providedIn: 'root'
})
export class ModstorieService {
  grid: GridOptions;

  constructor(private editService: EditorService) { }
  // tslint:disable-next-line:typedef
  setGridOptions(g: GridOptions){
    this.grid = g;
  }

  // tslint:disable-next-line:typedef
  deleteRow(){
    const selRow = this.grid.api.getSelectedRows();
    this.grid.rowData.splice(this.editService.rowId, 1);
    const i = this.grid.api.applyTransaction({ remove: selRow });
  }
  // tslint:disable-next-line:typedef
  updateRow(story: storia, rowId: number){
    // tslint:disable-next-line:prefer-const
    let itemsToUpdate = [];
    this.grid.api.forEachNodeAfterFilterAndSort(function(rowNode, index){
      if (!rowNode.isSelected || rowId !== index) {
        return;
      }
      const data = rowNode.data;
      data.n = story.id;
      data.title = story.values.titolo;
      data.nstories = story.values.nstory;
      itemsToUpdate.push(data);
    });
    const res = this.grid.api.applyTransaction({ update: itemsToUpdate });
  }




}
