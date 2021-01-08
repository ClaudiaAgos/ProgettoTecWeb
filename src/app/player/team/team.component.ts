import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']



})


export class TeamComponent {

  enteredAge = '';
  enteredPeople = '';

  newAge = '';
  newPeople = '';


  constructor(private router: Router){}

  setAge(){
    this.newAge = this.enteredAge;
  }

  setPeople(){
    this.newPeople = this.enteredPeople;
  }


  validation() {
    if(this.newAge.valueOf() === '11-14' && this.newPeople.valueOf() == 'individual'){
      console.log('Media - individuale');
      this.router.navigateByUrl('/storyMI');
    }
    if(this.newAge.valueOf() == '11-14' && this.newPeople.valueOf() == 'classe'){
      console.log("Media - classe");
      this.router.navigateByUrl('/storyMC');
    }
    if(this.newAge.valueOf() == '11-14' && this.newPeople.valueOf() == 'gruppo'){
      console.log("Media - gruppo");
      this.router.navigateByUrl('/storyMG');
    }

    if(this.newAge.valueOf() === '15-18' && this.newPeople.valueOf() === 'individual'){
      console.log('Media - individuale');
      this.router.navigateByUrl('/storyMI');
    }
    if(this.newAge.valueOf() === '15-18' && this.newPeople.valueOf() === 'classe'){
      console.log('Media - classe');
      this.router.navigateByUrl('/storyMC');
    }
    if(this.newAge.valueOf() === '11-14' && this.newPeople.valueOf() === 'gruppo'){
      console.log('Media - gruppo');
      this.router.navigateByUrl('/storyMG');
    }

  }
}
