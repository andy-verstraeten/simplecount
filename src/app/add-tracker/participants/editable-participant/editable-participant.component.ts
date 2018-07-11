import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-editable-participant',
  templateUrl: './editable-participant.component.html',
  styleUrls: ['./editable-participant.component.scss']
})
export class EditableParticipantComponent implements OnInit {
  @Input() participant: string;
  @Output() nameChangedEvent = new EventEmitter<{oldName: string, newName: string}>()
  editing = false;
  oldName = ''
  constructor() {
  }

  ngOnInit() {
  }
  toggleEditing() {
    this.oldName = this.participant;
    this.editing = !this.editing;
  }

  nameChanged() {
    this.nameChangedEvent.emit({
      oldName: this.oldName,
      newName: this.participant
    })
    this.toggleEditing();
  }

}
