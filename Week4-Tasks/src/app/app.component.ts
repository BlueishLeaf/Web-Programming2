import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullNameMsg: string;
  total: number;
  isTrueOrFalse: boolean;

  outputFullName():void {
    var fullName: string;
    fullName = 'Killian Kelly';
    console.log(fullName);
  }
  outputFNameSName(fName: string, lName: string):void {
    this.fullNameMsg = fName + lName;
    console.log(this.fullNameMsg);
  }
  addNumbers(num1: string, num2: string):void{
    this.total = +num1 + +num2;
  }
  trueOrFalse(num: string):void {
    if(+num % 2 ==0){
      this.isTrueOrFalse = true;
    }
    else{
      this.isTrueOrFalse = false;
    }
  }

}
