import { Component } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css'
})
export class ColorPickerComponent {
  selectedColor: string = '#FF6700'; // Default color

  updateColor() {
    // This function can be used to perform any additional actions when the color changes.
    console.log('Selected Color:', this.selectedColor);
  }
}
