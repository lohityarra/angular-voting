import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected:number = -1;

  onVote(index:number){
    if(this.isSelected(index)){
      this.selected= -1;
    }
    else{
      this.selected=index;
    }

  }
  isSelected(index:number){
    return this.selected === index;
  }
  anySelected(){
    return this.selected !== -1;
  }
  getButtonText(index:number){
    if(this.isSelected(index)){
      return "Unvote";
    }else{
      return "Vote";
    }
  }
}
