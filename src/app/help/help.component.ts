import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent{

  constructor(private router:Router){
    let a=localStorage.getItem('uname');
    if(!(typeof a != 'undefined' && a)){
      this.router.navigate(["Login"])
    }

  }
  showMyContainer1: boolean = false;
  showMyContainer2: boolean = false;
  showMyContainer3: boolean = false;
  showMyContainer4: boolean = false;
  showMyContainer5: boolean = false;
questions:string[]=[
  "How do I make a purchase using Amazon Business Credit?",
  " What documents I need to submit to Capital Float after completing my online application?",
  "Is the information I share to avail Amazon Business Credit secure?",
  "What happens if I miss a payment?",
  "Will the other employees in my company be able to use this credit facility to purchase on behalf of my company?"
]
answers:string[]=[
  "We have made it super easy for you. It takes only one click to checkout that too without using any OTP. All you need to do is to select “Amazon Business Credit” payment option while placing the order & you are good to go",
  "Please note the documents required to complete your application based on your business type :1.Business License Details, Aadhar card copy of proprietor, PAN card copy of proprietor.",
  "Your business details are totally secure. Amazon follows globally recognized and certified data security standards to ensure safety of your data and information. Capital Float is also following stringent data security standards mandated under the Indian law.",
  "Are you worried about due dates, we got it covered. Just set up the NACH mandate during the KYC process & avoid any misses in repayment because Capital float will auto-debit your bank account on due date as per the latest statement. In case you miss any repayment, Amazon Business Credit option would be disabled (after 15th of the next month) and you will be given a 3-day grace period to make the payment for the entire due amount (till 18th of the month)",
  "Amazon Business Credit is presently available only to a single user in a business account."
]


showans1(){
  this.showMyContainer1=true;
}
showans5(){
  this.showMyContainer5=true;
}
showans2(){
  this.showMyContainer2=true;
}
showans3(){
  this.showMyContainer3=true;
}
showans4(){
  this.showMyContainer4=true;
}
}





