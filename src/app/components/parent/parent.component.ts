import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges {
@Input() input = ''
  userName = 'Maria';
  myProperty = 0

  updateUser() {
     this.userName = 'Chris';
  }
  log() {
    console.log("log")
  }
  updateProperty() {
    const getRandomNumber = Math.floor(Math.random()*5)
    this.myProperty = getRandomNumber 
  }
  ngOnInit() {
    console.log("onInit in parent executed")
  }
  ngOnChanges(changes:SimpleChanges):void {
    console.log("onChanges executed")
    console.log(changes)
  }
  ngDoCheck(): void {
    console.log("DoCheck executed")
  }

}
