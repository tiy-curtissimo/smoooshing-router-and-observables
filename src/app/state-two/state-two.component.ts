import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-two',
  templateUrl: './state-two.component.html',
  styleUrls: ['./state-two.component.css']
})
export class StateTwoComponent implements OnInit {

  @Input() children;

  constructor() { }

  ngOnInit() {
  }

}
