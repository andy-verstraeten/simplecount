import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-participant-option',
  templateUrl: './participant-option.component.html',
  styleUrls: ['./participant-option.component.scss']
})
export class ParticipantOptionComponent implements OnInit {
  @Input() participantName: string;
  // TODO implement all selected
  allSelected: boolean;

  @Output() changeEvent = new EventEmitter<{participant: string, included: boolean}>();
  selected = false;
  constructor() {
    this.selected = this.allSelected;
  }
  ngOnInit() {
  }

  onChange() {
    this.changeEvent.emit({participant: this.participantName, included: this.selected});
  }

}
