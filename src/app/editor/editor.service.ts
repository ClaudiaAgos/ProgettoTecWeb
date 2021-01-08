import { Injectable } from '@angular/core';
import { ModstorieComponent} from './modstorie/modstorie.component';
import {ModifdeleComponent} from './modifdele/modifdele.component';

// tslint:disable-next-line:class-name
export interface storia{
  id: string;
  values: {
    titolo: string;
    nstory: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  stories: storia[] = [];

  selectedId: string;
  rowId: any;

  constructor() {
    this.stories.push({
      id: Math.random().toString(18).substr(2, 17) ,
      values: {
        titolo: 'storia 7-10',
        nstory: 10,
      }
    });

    this.stories.push({
      id: Math.random().toString(18).substr(2, 17),
      values: {
        titolo: 'storia 11-14',
        nstory: 10,
      }
    });

    this.stories.push({
      id: Math.random().toString(18).substr(2, 17),
      values: {
        titolo: 'storia 15-18',
        nstory: 10,
      }
    });
  }

  // tslint:disable-next-line:typedef
  removeStory(id: string){
    const i = this.myIndexOf(id);
    this.stories.splice(i, 1);
  }
  // tslint:disable-next-line:typedef
  myIndexOf(obj: string){
    for (let i = 0; i < this.stories.length; i++) {
      console.log(i);
      // @ts-ignore
      if (obj === this.stories[i].id) {
        console.log(i);
        return i;
      }
    }
    return -1;
  }
    getCurrId(): string{
    return this.selectedId;
  }
  // tslint:disable-next-line:typedef
  setCurrentIdAndRow(obj: string, rowId: any){
    this.selectedId = obj;
    this.rowId = rowId;
  }
}

