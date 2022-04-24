import { Component, Input, OnInit } from '@angular/core';
import { Assignement } from '../assignment.modele';

@Component({
  selector: 'app-assignments-detail',
  templateUrl: './assignments-detail.component.html',
  styleUrls: ['./assignments-detail.component.css']
})
export class AssignmentsDetailComponent implements OnInit {
  @Input() assignmentTransmis?: Assignement; //asiana input angalana ilay detail
  //

  constructor() { }

  ngOnInit(): void {
  }
  
  onAssignmentRendu() {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;
    }
  }

}
