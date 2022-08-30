import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validator,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Model/Customer';
import { RegistrationService } from '../Services/registration.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  str:string ="";
  selectedFile: File = null;
  theFile: any = null;
theFiles:any=[];
  mygroup:FormGroup;
  newBlogForm: FormGroup<{ Name: FormControl<any>; ImageOfUser: any; }>;
  messages: any;
  constructor(private myBuilder:FormBuilder,private _router:Router,private Registration:RegistrationService) { 
    this.mygroup=this.myBuilder.group({
      'userName':[],
      'password':[],
      'confirmPassword':[],
      'age':[],
      'email':[],
      'phoneNumber':[],
      'dob':[],


    })
  }
  
onFileChange(event) {
  this.theFile = null;
  this.theFile = event.target.files[0];
  console.log(this.theFile);

  }
 
  SaveCustomer(){
    console.log(this.mygroup);
    console.log(this.theFile);
console.log("Inside save function");

    this.readAndUploadFile(this.theFile);

    this._router.navigate(["Login"])

}






/////////






private readAndUploadFile(theFile: any) {
  let file = new Customer();
  file.userName= this.mygroup.get('userName').value,
  file.password= this.mygroup.get('password').value,
  file.age= this.mygroup.get('age').value,
  file.email= this.mygroup.get('email').value,
  file.phoneNumber= this.mygroup.get('phoneNumber').value,
  file.dob= this.mygroup.get('dob').value,
  file.filename = theFile.name;
  file.fileType = theFile.type;
  console.log(file.filename);
  
  console.log("file data");
  console.log(file);
  console.log("end");
  
  let reader = new FileReader();

  reader.onload = () => {
    file.fileAsBase64 = reader.result.toString();
    this.Registration.SaveCustomer(file)
      .subscribe();
  }
  reader.readAsDataURL(theFile);
}


}

