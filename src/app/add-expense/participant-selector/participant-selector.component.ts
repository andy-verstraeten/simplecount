import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-participant-selector',
  templateUrl: './participant-selector.component.html',
  styleUrls: ['./participant-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ParticipantSelectorComponent),
    multi: true
  }]
})
export class ParticipantSelectorComponent implements OnInit, ControlValueAccessor {
  @Input() participants: string[];
  includedParticipants: string[] = [];
  allSelected = false;
  // var for form integration
  propagateChange = (_: any) => {};
  constructor() {
  }

  ngOnInit() {
  }

  updateList(participant: {participant: string, included: boolean}) {
    if (participant.included) {
      this.includedParticipants.push(participant.participant);
    } else {
      this.includedParticipants.splice(this.includedParticipants.indexOf(participant.participant), 1);
    }
    this.propagateChange(this.includedParticipants);
  }

  writeValue(participants: string[]) {
    if (participants) {
      this.includedParticipants = participants;
    }

  }
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

}
