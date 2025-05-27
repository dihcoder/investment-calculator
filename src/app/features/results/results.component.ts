import { Component, Input, input, Signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import type { TableRow } from './table-row.model';

@Component({
  selector: 'app-results',
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  // Input signal for results data
  results = input<TableRow[]>();

  //  input decorator
  //@Input() results?: TableRow[];
}
