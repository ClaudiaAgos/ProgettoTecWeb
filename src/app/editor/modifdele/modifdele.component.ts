import { Component} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { EditorService} from '../editor.service';
import {ModstorieService} from '../modstorie/modstorie.service';

@Component({
  selector: 'app-modifdele',
  templateUrl: './modifdele.component.html',
  styleUrls: ['./modifdele.component.css']
})
export class ModifdeleComponent {

  constructor(public story: EditorService, private modstService: ModstorieService) {}
    // tslint:disable-next-line:typedef
  removeStory(){
    console.log(this.story.selectedId);

    this.story.removeStory(this.story.selectedId);
    this.modstService.deleteRow();

  }

}

