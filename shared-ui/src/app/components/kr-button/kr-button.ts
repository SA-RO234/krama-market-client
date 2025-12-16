import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kr-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kr-button.html',
  styleUrls: ['./kr-button.css'],
})
export class KrButton {
  @Input() type: 'primary' | 'secondary' | 'link' = 'primary';
  @Input() disabled = false;
  @Output() pressed = new EventEmitter<Event>();

  onClick(e: Event) {
    if (!this.disabled) this.pressed.emit(e);
  }
}
