import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string=""
  password:string=""

  constructor (private toaster: ToastrService, private api:AdminService, private router : Router){}

  login(){
    // admin login
    if(this.username && this.password){
      // this.toaster.success("Proceed to api call")
      this.api.getAdminDetails().subscribe({
        next:(res:any)=>{
          console.log(res);

          const {username,password} = res
          if(username == this.username && password ==  this.password) {
            this.toaster.success("Login Successful")
           
            sessionStorage.setItem("adminDetails",JSON.stringify(res))
            this.username=""
            this.password=""

           
            this.router.navigateByUrl("/users")
          }else{
            this.toaster.error('Invalid email or password')
          }
          
        },
        error:(reson:any)=> {
          this.toaster.error(reson.message)
        }
      })
    }else{
      this.toaster.warning("Please fill the input fields")
    }
  }

}
