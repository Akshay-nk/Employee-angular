import { Component } from '@angular/core';
import { userSchema } from '../Models/userSchema';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user:userSchema={}

  constructor(public dialogRef:MatDialogRef<AddUserComponent>, private api:ApiService,private toaster:ToastrService,private router:Router){}
  addUser(){

    this.api.addUserAPI(this.user).subscribe({
      
        
       
        
        next: (result) => {
          this.toaster.success('User added successfully');
          this.dialogRef.close(result);
      },
      error:(reason:any)=>{
        console.log(reason);
        
      }
      
    })
  }

  cancel(){
    this.user.email=""
    this.user.name=""
    this.user.empId=""
    this.user.contact=""
    this.user.address=""
    this.dialogRef.close()
    
  }

}
