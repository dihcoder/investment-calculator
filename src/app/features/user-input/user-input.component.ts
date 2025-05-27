import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InputData } from './input-data.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal('150');
  annualInvestment = signal('200');
  expectedReturn = signal('2');
  duration = signal('12');

  // using signal based output
  // submit = output<InputData>();

  // Using output decorator with event emitter
  @Output() submitUserData = new EventEmitter<InputData>();

  resetInputValues() {
    this.initialInvestment.set('');
    this.annualInvestment.set('');
    this.expectedReturn.set('');
    this.duration.set('');
  }

  onSubmit() {
    this.submitUserData.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    } as InputData);

    //this.resetInputValues()
  }
}
