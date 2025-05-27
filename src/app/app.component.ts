import { Component, computed, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { UserInputComponent } from "./features/user-input/user-input.component";
import { ResultsComponent } from "./features/results/results.component";
import { InvestmentCalculatorService } from './core/services/investment-calculator.service';
import type { InputData } from './features/user-input/input-data.model';
import type { TableRow } from './features/results/table-row.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // calculationResults?: TableRow[];
  calculationResults = signal<TableRow[]|undefined>(undefined);

  constructor(private investmentCalculatorService: InvestmentCalculatorService) {
  }

  calculateInvestment(inputData: InputData) {
    const calcResults: any[] = this.investmentCalculatorService.calculateInvestment(inputData);
    this.calculationResults.set(calcResults)
  }
}
