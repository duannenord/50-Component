import { Component } from '@angular/core';

@Component({
  selector: 'app-note-taking-app',
  templateUrl: './note-taking-app.component.html',
  styleUrl: './note-taking-app.component.css'
})
export class NoteTakingAppComponent {
  newNote: string = '';
  notes: string[] = [];

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push(this.newNote);
      this.newNote = '';
    }
  }

  removeNote(note: string) {
    this.notes = this.notes.filter(n => n !== note);
  }
}
