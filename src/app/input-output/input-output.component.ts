import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent {
  @Input() items: string[];
  @Output() deleteRequest = new EventEmitter<string>();
  @Output() newItemEvent = new EventEmitter<string>();

  lineThrough = '';

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  delete(value: string) {
    console.log('Child says: emiting item deleteRequest with ', value);
    this.deleteRequest.emit(value);
  }
}
