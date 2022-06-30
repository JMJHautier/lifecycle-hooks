import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnChanges {
  @Input() userName = '';
  ngOnChanges(changes:SimpleChanges): void {
    console.log({executed: "onChanges in child", changes})
  }

}
