import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  //  staticemail="abc@tcs.com";
  //  staticpassword="12345678";
  // title="login";
  
  constructor( 
    private router: Router, private Auth: AuthenticationService
  ) {}
    
      email = new FormControl('xyz@tcs.com', [Validators.required,Validators.email] );
      password1 = new FormControl('abc',[Validators.required]);
   
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }

  ngOnInit(): void {
  }

  // toNextpage(){
  //         let emailid = this.email.value;
  //         let passwd = this.password1.value;
  //         console.log(emailid);
  //         if(emailid === 'xyz@tcs.com' && passwd === 'abc')
  //         {
  //         this.router.navigate(['/2ndpage']);
  //         }
  //         else
  //         {
  //           alert('Enter correct credentials');
  //         }
  //  }
  toNextpage(){
            let emailid = this.email.value;
           let passwd = this.password1.value;

          //  this.Auth.getUserDetails(emailid,passwd).subscribe(data => {
            if(emailid === 'xyz@tcs.com' && passwd === 'abc')
            {
              this.router.navigate(['/2ndpage']);
              this.Auth.setLoggedIn(true)
             } else{
              alert('Enter correct credentials');
             }
          
           console.log(emailid,passwd)
  }

          
  
}