import { Component, computed, inject, Input, input, Signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import type { TableRow } from './table-row.model';
import { InvestmentCalculatorService } from '../../core/services/investment-calculator.service';

@Component({
  selector: 'app-results',
  imports: [CurrencyPipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  // Input signal for results data
  //results = input<TableRow[]>();

  //  input decorator
  //@Input() results?: TableRow[];

  private investmentService = inject(InvestmentCalculatorService);

  // read-only signal (prevents rewriting service data)
  // results = computed(() => this.investmentService.resultData());

  // 'asReadonly' method provided by Angular
  results = this.investmentService.resultData.asReadonly()
}
