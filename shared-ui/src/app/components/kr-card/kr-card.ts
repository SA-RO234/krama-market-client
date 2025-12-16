import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kr-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kr-card.html',
  styleUrls: ['./kr-card.css'],
})
export class KrCard {
  @Input() title = '';
}
