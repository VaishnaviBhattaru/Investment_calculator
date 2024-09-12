import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment-results/investment-results.service';
// import { OutletContext } from '@angular/router';
interface data{
  initialInvestment: number, 
  duration: number,
  annualInvestement: number, 
  expectedReturn: number,
}
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
 @Output () dataArr = new EventEmitter<data>()
 initialInvestment =0
 annualInvestement = 0
 expecteReturn = 5
 duration = 10

//  private InvestmentService = inject(InvestmentService)
 onSubmit(){
  this.dataArr.emit({initialInvestment:this.initialInvestment,
    duration:this.duration,
    annualInvestement:this.annualInvestement,
    expectedReturn :this.expecteReturn})
    this.initialInvestment =0
    this.annualInvestement = 0
    this.expecteReturn = 5
    this.duration = 10
 }

}
 