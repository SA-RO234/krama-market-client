import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kr-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kr-header.html',
  styleUrls: ['./kr-header.css'],
})
export class KrHeader {
  @Input() title = '';
}
