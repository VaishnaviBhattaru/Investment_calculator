import { Component , inject, Input} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentService } from './investment-results/investment-results.service';
interface data{
   initialInvestment: number, 
   duration: number,
   annualInvestement: number, 
   expectedReturn: number 
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent,UserInputComponent,InvestmentResultsComponent]
})
export class AppComponent {


  private InvestementService = inject(InvestmentService)
  dataArr!:{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[];
  setDataArr(data:data){
    this.dataArr = this.InvestementService.calculateInvestmentResults(
      data.initialInvestment,
      data.duration,
      data.annualInvestement,
      data.expectedReturn
    )

    
  }
}
