import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blah';
  items = [];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  deleteItem(value: string) {
    const index = this.items.indexOf(value);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
