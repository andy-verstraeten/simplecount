import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  @Input() participants: string[];
  newParticipant = '';
  errorMessage = '';
  constructor() { }

  ngOnInit() {
  }
  notUniqueName() {
    return (this.participants.filter(
      participant => this.newParticipant === participant)
        .length !== 0);
  }
  addNewParticipant() {
    if (this.newParticipant === '') {
      this.errorMessage = 'Please enter a name';
    } else if (this.notUniqueName()) {
      this.errorMessage = 'Participant names can not be the same';
    } else {
      this.participants.push(this.newParticipant);
      this.errorMessage = '';
      this.newParticipant = '';
    }
  }

  updateParticipant(updatedParticpant: {oldName: string, newName: string}) {
    this.participants = this.participants.map(participant => {
      return (participant === updatedParticpant.oldName) ? updatedParticpant.newName : participant;
      });
  }
  deleteParticipant(participantToDelete: string) {
    this.participants = this.participants.filter(
      participant => participant !== participantToDelete
    );
  }
}
